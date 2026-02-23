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

    // Basic trimming and validation
    const trimmedEmail = String(email).trim();
    const trimmedMessage = String(message).trim();

    // simple email regex for server-side validation
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

    // Send to Resend API
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
      // Try to read JSON error body, fall back to text
      let details: unknown = null;
      try {
        // try parsing JSON response
        details = await resendRes.json();
      } catch {
        try {
          // fallback to text
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

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }
}
