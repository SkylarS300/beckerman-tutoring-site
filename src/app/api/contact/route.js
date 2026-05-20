import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const body = await request.json();
  const { parentName, email, phone, studentName, grade, subjects, goals, heardAbout } = body;
  const jackiEmail = process.env.JACKI_EMAIL;

  if (!jackiEmail) {
    return NextResponse.json({ error: "Recipient email is not configured" }, { status: 500 });
  }

  try {
    await resend.emails.send({
      from: "Beckerman Learning <onboarding@resend.dev>",
      to: jackiEmail,
      subject: `New inquiry from ${parentName} — ${studentName} (Grade ${grade})`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 8px; font-weight: bold;">Parent Name</td><td style="padding: 8px;">${parentName}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;">${email}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Phone</td><td style="padding: 8px;">${phone || "Not provided"}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Student Name</td><td style="padding: 8px;">${studentName}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Grade</td><td style="padding: 8px;">${grade}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Subjects</td><td style="padding: 8px;">${subjects || "Not provided"}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Goals</td><td style="padding: 8px;">${goals || "Not provided"}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">How they heard</td><td style="padding: 8px;">${heardAbout || "Not provided"}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}