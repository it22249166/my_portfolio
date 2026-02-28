import { NextResponse } from "next/server";
import twilio from "twilio";

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
      return NextResponse.json(
        { message: "Invalid email address." },
        { status: 400 }
      );
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

    // ---------- 1) Send Email (Resend) ----------
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

    if (!resendRes.ok) {
      let details: unknown = null;
      try {
        details = await resendRes.json();
      } catch {
        try {
          details = await resendRes.text();
        } catch {
          details = `Status ${resendRes.status}`;
        }
      }
      console.error("Resend error:", resendRes.status, details);
      return NextResponse.json(
        { message: "Failed to send email.", details },
        { status: 502 }
      );
    }

    // ---------- 2) Save to Google Sheets (non-blocking best effort) ----------
    const sheetUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    // don’t fail the whole request if sheets fails
    if (sheetUrl) {
      fetch(sheetUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: trimmedEmail,
          message: trimmedMessage,
          source: "portfolio",
          userAgent: req.headers.get("user-agent") || "",
        }),
      }).catch((e) => console.error("Sheets logging failed:", e));
    }

    // ---------- 3) SMS to you (optional) ----------
    const sid = process.env.TWILIO_ACCOUNT_SID;
    const token = process.env.TWILIO_AUTH_TOKEN;
    const fromNum = process.env.TWILIO_FROM_NUMBER;
    const toNum = process.env.SMS_TO_NUMBER;

    if (sid && token && fromNum && toNum) {
      const client = twilio(sid, token);
      client.messages
        .create({
          from: fromNum,
          to: toNum,
          body: `New Portfolio Message 👋\nFrom: ${trimmedEmail}\nMsg: ${trimmedMessage.slice(0, 220)}${
            trimmedMessage.length > 220 ? "..." : ""
          }`,
        })
        .catch((e) => console.error("SMS send failed:", e));
    }

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }
}