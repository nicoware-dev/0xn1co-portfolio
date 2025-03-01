import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const ADMIN_EMAIL = import.meta.env.NOTIFICATION_EMAIL || 'nicoware.dev@gmail.com';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail({ name, email, message }: EmailData) {
  try {
    console.log('Sending email with data:', { name, email, message });
    
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ADMIN_EMAIL,
      subject: `New Contact Form Message from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    if (error) {
      console.error('Resend API error:', error);
      throw error;
    }

    console.log('Email sent successfully:', data);
    return data;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
} 