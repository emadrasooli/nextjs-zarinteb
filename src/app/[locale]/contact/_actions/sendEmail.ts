"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const firstName = formData.get("first-name");
  const lastName = formData.get("last-name");
  const email = formData.get("email");
  const phone = formData.get("phone-number");
  const message = formData.get("message");

  if (!email || !message) {
    return { errorCode: "missing_required" as const };
  }

  try {
    // 1. Removed 'data' because we only need to check if there is an 'error'
    const { error } = await resend.emails.send({
      from: "Zarinteb Website <noreply@contact.zarinteb.com>",
      to: "zarinteb.medicalequipment@gmail.com",
      replyTo: email as string,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        
        Message:
        ${message}
      `,
    });

    if (error) {
      return { errorCode: "send_failed" as const };
    }

    return { success: true };
  } catch (error) {
    console.error("Resend Error:", error);
    
    return { errorCode: "send_failed" as const };
  }
}
