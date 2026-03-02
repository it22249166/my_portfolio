import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, message } = (await req.json()) as {
      email?: string;
      message?: string;
    };

    if (!email || !message) {
      return NextResponse.json(
        { message: "Email and message are required." },
        { status: 400 }
      );
    }

    const trimmedEmail = String(email).trim();
    const trimmedMessage = String(message).trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json({ message: "Invalid email address." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !to || !from) {
      return NextResponse.json(
        {
          message:
            "Server email is not configured. Set RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL.",
        },
        { status: 500 }
      );
    }

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: trimmedEmail,
        subject: `Portfolio contact from ${trimmedEmail}`,
        text: trimmedMessage,
      }),
    });

    let emailSent = true;
    let emailDetails: string | null = null;

    if (!resendRes.ok) {
      emailSent = false;
      try {
        const json = await resendRes.json();
        emailDetails = JSON.stringify(json);
      } catch {
        try {
          emailDetails = await resendRes.text();
        } catch {
          emailDetails = `Status ${resendRes.status}`;
        }
      }
      console.error("Resend error:", resendRes.status, emailDetails);
      // continue — still attempt to save to Sheets
    }

    // Save to Google Sheets (best-effort, but await so we can report details)
    const sheetUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    let sheetSaved = false;
    let sheetDetails: string | null = null;

    if (sheetUrl) {
      try {
        // Many Google Apps Script webhooks expect form-encoded data (x-www-form-urlencoded).
        // Send as URLSearchParams so doPost(e).parameter will be populated.
        const form = new URLSearchParams();
        form.append("email", trimmedEmail);
        form.append("message", trimmedMessage);
        form.append("source", "portfolio");
        form.append("userAgent", req.headers.get("user-agent") || "");

        const sheetRes = await fetch(sheetUrl, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: form.toString(),
        });

        if (sheetRes.ok) {
          sheetSaved = true;
        } else {
          try {
            sheetDetails = await sheetRes.text();
          } catch {
            sheetDetails = `Sheets webhook responded ${sheetRes.status}`;
          }
          console.error("Sheets logging failed (status):", sheetRes.status, sheetDetails);
        }
      } catch (e) {
        sheetDetails = String(e ?? "unknown error");
        console.error("Sheets logging failed:", e);
      }
    } else {
      sheetDetails = "No GOOGLE_SHEETS_WEBHOOK_URL configured";
      console.warn(sheetDetails);
    }

    return NextResponse.json(
      { message: "Success", emailSent, emailDetails, sheetSaved, sheetDetails },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }
}
