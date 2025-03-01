import type { APIRoute } from 'astro';
import { sendEmail } from '../../utils/email';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get('name')?.toString();
    const email = data.get('email')?.toString();
    const message = data.get('message')?.toString();
    const subject = data.get('subject')?.toString();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          error: 'Missing required fields'
        }),
        { status: 400 }
      );
    }

    await sendEmail({
      name,
      email,
      message: `Subject: ${subject}\n\n${message}`
    });

    return new Response(
      JSON.stringify({
        message: 'Email sent successfully!'
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'Failed to send email'
      }),
      { status: 500 }
    );
  }
}; 