import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const resend = new Resend(undefined                              );
const ADMIN_EMAIL = "nicoware.dev@gmail.com";
async function sendEmail({ name, email, message }) {
  try {
    console.log("Sending email with data:", { name, email, message });
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
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
      console.error("Resend API error:", error);
      throw error;
    }
    console.log("Email sent successfully:", data);
    return data;
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
}

const POST = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get("name")?.toString();
    const email = data.get("email")?.toString();
    const message = data.get("message")?.toString();
    const subject = data.get("subject")?.toString();
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields"
        }),
        { status: 400 }
      );
    }
    await sendEmail({
      name,
      email,
      message: `Subject: ${subject}

${message}`
    });
    return new Response(
      JSON.stringify({
        message: "Email sent successfully!"
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Failed to send email"
      }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
