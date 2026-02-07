/* empty css                                 */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D321Zypn.mjs';
import 'kleur/colors';
import { $ as $$Header, m as mainMenu, c as $$SocialIcons, a as $$Footer, b as $$Layout } from '../chunks/Footer_DhwpaEJp.mjs';
import { $ as $$Title } from '../chunks/Title_BR5RLFOp.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { toast, Toaster } from 'sonner';
import { $ as $$Boton } from '../chunks/Boton_CcaMN8mf.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const loadingToast = toast.loading("Sending your message...");
    try {
      const formData2 = new FormData(e.currentTarget);
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData2
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }
      toast.dismiss(loadingToast);
      toast.success("Message sent successfully! We will get back to you soon.", {
        duration: 5e3
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast.dismiss(loadingToast);
      toast.error(error instanceof Error ? error.message : "Failed to send message", {
        duration: 5e3
      });
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "contact-form", children: [
      /* @__PURE__ */ jsxs("div", { className: "form-field", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "name", children: "Full Name" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "name",
            type: "text",
            name: "name",
            value: formData.name,
            onChange: handleChange,
            required: true,
            placeholder: "Enter your full name",
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "form-field", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "email", children: "Email Address" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "email",
            type: "email",
            name: "email",
            value: formData.email,
            onChange: handleChange,
            required: true,
            placeholder: "Enter your email address",
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "form-field", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "subject", children: "Subject" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "subject",
            type: "text",
            name: "subject",
            value: formData.subject,
            onChange: handleChange,
            required: true,
            placeholder: "Enter message subject",
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "form-field", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "message", children: "Message" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            id: "message",
            name: "message",
            value: formData.message,
            onChange: handleChange,
            required: true,
            placeholder: "Enter your message",
            className: "form-input",
            rows: 4
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("button", { type: "submit", className: "send-button", disabled: isLoading, children: [
        isLoading ? "Sending..." : "Send Message",
        /* @__PURE__ */ jsxs(
          "svg",
          {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            children: [
              /* @__PURE__ */ jsx("title", { children: "Send message icon" }),
              /* @__PURE__ */ jsx("path", { d: "M2 21L23 12L2 3V10L17 12L2 14V21Z", fill: "currentColor" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          width: 100%;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        label {
          color: var(--primary-90);
          font-size: 1.6rem;
        }

        .form-input {
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(123, 74, 226, 0.2);
          border-radius: 8px;
          color: var(--primary-100);
          font-size: 1.6rem;
          transition: all 0.3s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--accent);
          background: rgba(255, 255, 255, 0.1);
        }

        .send-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          border: none;
          border-radius: 8px;
          color: white;
          font-size: 1.6rem;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .send-button:hover {
          transform: translateY(-2px);
        }

        .send-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .form-message {
          padding: 1rem;
          border-radius: 8px;
          font-size: 1.4rem;
          margin-top: 1rem;
        }

        .form-message.success {
          color: #10b981;
        }

        .form-message.error {
          color: #ef4444;
        }
      ` })
  ] });
}

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact | Nicolas Dominici", "description": "Get in touch for AI automation projects, web development, or consulting. Let's bring your ideas to life!", "image": "/og-image.png", "type": "website", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "origin": mainMenu, "data-astro-cid-uw5kdbxl": true })} ${maybeRenderHead()}<main class="pt-40 pb-20 px-4" data-astro-cid-uw5kdbxl> <div class="max-w-[var(--max-width)] mx-auto" data-astro-cid-uw5kdbxl> <div class="text-center mb-16" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "Title", $$Title, { "contenido": "Let's Connect", "data-astro-cid-uw5kdbxl": true })} <h2 class="subtitle" data-astro-cid-uw5kdbxl>Bring Your Ideas to Life</h2> </div> <div class="contact-grid" data-astro-cid-uw5kdbxl> <!-- Contact Info Section --> <div class="contact-info" data-astro-cid-uw5kdbxl> <p class="intro-text" data-astro-cid-uw5kdbxl>
I'm always excited to discuss new projects, ideas, or opportunities. Whether you have a specific project in mind or need guidance on leveraging technology for your business, feel free to reach out.
</p> <div class="quote-cta" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "Boton", $$Boton, { "href": "https://forms.gle/Qz6YfDwRazVcU8Vo8", "texto": "Request a Quote", "class": "primary", "target": "_blank", "data-astro-cid-uw5kdbxl": true })} </div> <div class="contact-methods" data-astro-cid-uw5kdbxl> <div class="contact-item" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "iconify-icon", "iconify-icon", { "icon": "mdi:email", "width": "24", "height": "24", "data-astro-cid-uw5kdbxl": true })} <a href="mailto:nicolasdominici@outlook.com" data-astro-cid-uw5kdbxl>nicolasdominici@outlook.com</a> </div> <div class="contact-item" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "iconify-icon", "iconify-icon", { "icon": "mdi:telegram", "width": "24", "height": "24", "data-astro-cid-uw5kdbxl": true })} <a href="https://t.me/n1c0_dev" target="_blank" data-astro-cid-uw5kdbxl>@n1c0_dev</a> </div> <div class="contact-item" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "iconify-icon", "iconify-icon", { "icon": "ic:baseline-discord", "width": "24", "height": "24", "data-astro-cid-uw5kdbxl": true })} <a href="https://discord.com/users/0xn1c0" target="_blank" data-astro-cid-uw5kdbxl>0xn1c0</a> </div> <div class="contact-item" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "iconify-icon", "iconify-icon", { "icon": "mdi:map-marker", "width": "24", "height": "24", "data-astro-cid-uw5kdbxl": true })} <span data-astro-cid-uw5kdbxl>Corrientes, Argentina</span> </div> </div> <div class="social-icons-wrapper" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "SocialIcons", $$SocialIcons, { "width": "30", "height": "30", "data-astro-cid-uw5kdbxl": true })} </div> </div> <!-- Contact Form Section --> <div class="contact-form-container" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/components/ContactForm", "client:component-export": "ContactForm", "data-astro-cid-uw5kdbxl": true })} </div> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-uw5kdbxl": true })} ${renderComponent($$result2, "Toaster", Toaster, { "client:load": true, "position": "top-right", "expand": false, "richColors": true, "closeButton": true, "client:component-hydration": "load", "client:component-path": "sonner", "client:component-export": "Toaster", "data-astro-cid-uw5kdbxl": true })} ` })} `;
}, "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/pages/contact.astro", void 0);

const $$file = "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
