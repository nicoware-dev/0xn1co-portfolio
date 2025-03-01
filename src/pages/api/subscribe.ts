import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const email = data.get('email')?.toString();

    if (!email) {
      return new Response(JSON.stringify({
        message: 'Email is required'
      }), { status: 400 });
    }

    // Add your newsletter subscription logic here
    // For example, adding to a database or calling an external API

    return new Response(JSON.stringify({
      message: 'Subscribed successfully!'
    }), { status: 200 });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return new Response(JSON.stringify({
      message: 'Error processing subscription'
    }), { status: 500 });
  }
} 