import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || "Portfolio <onboarding@resend.dev>",
      to: (process.env.EMAIL_TO || "tlecocq99@gmail.com").split(",").map(s => s.trim()),
      subject: `New contact from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p>${String(message).replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    if (error) {
      console.error(error);
      return NextResponse.json({ error: "Email failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
