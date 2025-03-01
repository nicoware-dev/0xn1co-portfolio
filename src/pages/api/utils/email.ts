import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail({ name, email, message }: EmailData) {
  try {
    console.log('Sending email with data:', { name, email, message });
    
    const { data, error } = await resend.emails.send({
      from: 'Your Website <onboarding@resend.dev>',
      to: 'your-email@example.com',
      subject: `New Contact Form Message from ${name}`,
      reply_to: email,
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