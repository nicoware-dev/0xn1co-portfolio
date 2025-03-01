import { Resend } from 'resend';

if (!import.meta.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not defined in environment variables');
}

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export async function sendEmail({
  to,
  from = 'onboarding@resend.dev',
  subject,
  html
}: {
  to: string;
  from?: string;
  subject: string;
  html: string;
}) {
  try {
    console.log('Sending email:', { to, subject });
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
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