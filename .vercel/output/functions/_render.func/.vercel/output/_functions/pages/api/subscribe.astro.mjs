export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const data = await request.formData();
    const email = data.get("email")?.toString();
    if (!email) {
      return new Response(JSON.stringify({
        message: "Email is required"
      }), { status: 400 });
    }
    return new Response(JSON.stringify({
      message: "Subscribed successfully!"
    }), { status: 200 });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return new Response(JSON.stringify({
      message: "Error processing subscription"
    }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
