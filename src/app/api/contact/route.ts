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
        reply_to: email,
        subject: `Portfolio contact from ${email}`,
        text: message,
      }),
    });

    if (!resendRes.ok) {
      const errorText = await resendRes.text();
      console.error("Resend error:", errorText);
      return NextResponse.json(
        { message: "Failed to send email." },
        { status: 502 }
      );
    }

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }
}
