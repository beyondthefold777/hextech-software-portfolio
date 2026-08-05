import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    const { data, error } = await resend.emails.send({
      from: "Hextech Software <onboarding@hextech.software>",
      to: ["lyveonarival@gmail.com"],
      replyTo: email,
      subject: `New Lead: ${name}${phone ? ` - ${phone}` : ''}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #f4f4f5; padding: 12px; border-radius: 8px;">${message}</p>
          <hr style="margin: 24px 0;" />
          <p>Reply directly to this email to respond to ${name}.</p>
          ${phone ? `<p>Or call: <a href="tel:${phone}">${phone}</a></p>` : ''}
        </div>
      `,
    })

    if (error) {
      console.error(error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}