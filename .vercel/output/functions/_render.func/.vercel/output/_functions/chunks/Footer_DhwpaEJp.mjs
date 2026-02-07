import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, i as renderHead, j as renderSlot, m as maybeRenderHead, d as renderComponent } from './astro/server_D321Zypn.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
/* empty css                         */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { toast, Toaster } from 'sonner';

const $$Astro$3 = createAstro("https://0xn1co-portfolio.vercel.app");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Engineering Innovative Solutions for a Digital World",
    image = "/og-image.png",
    type = "website",
    publishDate
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const socialImageURL = new URL(image, Astro2.site);
  const locale = "es_ES";
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta http-equiv="Content-Type" content="text/html;charset=UTF-8"><link rel="canonical"${addAttribute(canonicalURL, "href")}><meta name="theme-color" content="#3b82f6"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"><meta property="og:type"${addAttribute(type, "content")}><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(socialImageURL, "content")}><meta property="og:locale"${addAttribute(locale, "content")}><meta property="og:site_name" content="0xn1co Portfolio">${type === "article" && publishDate && renderTemplate`<meta property="article:published_time"${addAttribute(publishDate.toISOString(), "content")}>`}<meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@0xn1co"><meta name="twitter:url"${addAttribute(canonicalURL, "content")}><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(socialImageURL, "content")}>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/layouts/Layout.astro", void 0);

const $$Astro$2 = createAstro("https://0xn1co-portfolio.vercel.app");
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Logo;
  const { name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a href="/" class="profile" data-astro-cid-tvrurpns> <h3 class="color__gradiente header__title" data-astro-cid-tvrurpns> ${name} </h3> </a> `;
}, "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/components/Logo.astro", void 0);

const $$Astro$1 = createAstro("https://0xn1co-portfolio.vercel.app");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { origin } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="header"> <div class="header__container"> ${renderComponent($$result, "Logo", $$Logo, { "name": "Nicolas Dominici" })} <nav class="nav-menu"> <button class="hamburger" aria-label="Menu"> <span class="hamburger-line"></span> <span class="hamburger-line"></span> <span class="hamburger-line"></span> </button> <ul class="nav-links"> ${origin.map((item) => renderTemplate`<li> <a class="nav-link"${addAttribute(item.url, "href")}> <span class="link-content"> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": item.icon, "width": "20", "height": "20" })} ${item.content} </span> </a> </li>`)} </ul> </nav> </div> </header> `;
}, "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/components/header/Header.astro", void 0);

const mainMenu = [
  {
    title: "Home",
    url: "/",
    icon: "mdi:home",
    content: "Home"
  },
  {
    title: "Request a Quote",
    url: "https://forms.gle/Qz6YfDwRazVcU8Vo8",
    icon: "mdi:clipboard-text-outline",
    content: "Request a Quote"
  },
  {
    title: "About",
    url: "/about",
    icon: "mdi:account",
    content: "About"
  },
  {
    title: "Services",
    url: "/services",
    icon: "mdi:cog",
    content: "Services"
  },
  {
    title: "Portfolio",
    url: "/portfolio",
    icon: "mdi:briefcase",
    content: "Portfolio"
  },
  {
    title: "Blog",
    url: "/blog",
    icon: "mdi:post",
    content: "Blog"
  },
  {
    title: "Contact",
    url: "/contact",
    icon: "mdi:email",
    content: "Contact"
  }
];

const $$Astro = createAstro("https://0xn1co-portfolio.vercel.app");
const $$SocialIcons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SocialIcons;
  const { width, height } = Astro2.props;
  const socialLinks = [
    {
      title: "LinkedIn",
      icon: "simple-icons:linkedin",
      href: "https://www.linkedin.com/in/nicolasdominici/"
    },
    {
      title: "X",
      icon: "ri:twitter-x-fill",
      href: "https://x.com/n1c0_dev"
    },
    {
      title: "GitHub",
      icon: "mdi:github",
      href: "https://github.com/nicoware-dev"
    },
    {
      title: "CV",
      icon: "tabler:file-cv",
      href: "../docs/cv_nicolas_dominici.pdf"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="icons__container" data-astro-cid-dv46nlzh> ${socialLinks.map((data) => renderTemplate`<a${addAttribute(data.href, "href")} target="_blank" rel="nofollow noreferrer noopener" class="icon-link" data-astro-cid-dv46nlzh> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "class": `skill__icon ${data.title}`, "icon": data.icon, "width": width, "height": height, "data-astro-cid-dv46nlzh": true })} </a>`)} </div> `;
}, "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/components/SocialIcons.astro", void 0);

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("/api/subscribe", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to subscribe");
      }
      toast.success(data.message || "Successfully subscribed to newsletter!", {
        duration: 5e3
      });
      setEmail("");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to subscribe", {
        duration: 5e3
      });
      console.error("Newsletter submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "newsletter-form", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "email",
        name: "email",
        value: email,
        onChange: (e) => setEmail(e.target.value),
        placeholder: "Enter your email",
        required: true,
        className: "newsletter-input",
        disabled: isLoading
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        className: "newsletter-button",
        disabled: isLoading,
        children: isLoading ? "Subscribing..." : "Sign Up"
      }
    )
  ] });
}

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer"> <div class="footer__container max-w-[var(--max-width)] mx-auto"> <div class="footer__main"> <div class="footer__brand"> ${renderComponent($$result, "Logo", $$Logo, { "name": "Nicolas Dominici" })} <p class="footer__description">
Engineering innovative solutions for a digital world.
</p> ${renderComponent($$result, "SocialIcons", $$SocialIcons, { "width": "23", "height": "23" })} </div> <div class="footer__links"> <div class="footer__section"> <h3>Quick Links</h3> <ul> <li><a href="/">Home</a></li> <li><a href="/about">About Me</a></li> <li><a href="/services">Services</a></li> <li><a href="/portfolio">Portfolio</a></li> <li><a href="/blog">Blog</a></li> <li><a href="/contact">Contact</a></li> </ul> </div> <div class="footer__section"> <h3>Social Media</h3> <ul> <li> <a href="https://linkedin.com/in/nicolasdominici/" target="_blank" rel="noopener"> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": "mdi:linkedin", "width": "20", "height": "20" })}
LinkedIn
</a> </li> <li> <a href="mailto:nicolasdominici@outlook.com"> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": "fluent:mail-28-regular", "width": "20", "height": "20" })}
Email
</a> </li> <li> <a href="https://t.me/n1c0_dev" target="_blank" rel="noopener"> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": "ic:baseline-telegram", "width": "20", "height": "20" })}
Telegram
</a> </li> <li> <a href="https://discord.com/users/0xn1c0" target="_blank" rel="noopener"> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": "ic:baseline-discord", "width": "20", "height": "20" })}
Discord
</a> </li> </ul> </div> <div class="footer__section"> <h3>Newsletter</h3> <p class="newsletter-description">
Stay updated with the latest insights and projects.
</p> ${renderComponent($$result, "NewsletterForm", NewsletterForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/components/NewsletterForm", "client:component-export": "NewsletterForm" })} </div> </div> </div> <div class="footer__bottom"> <p class="footer__copyright">© 2024 Nicolas Dominici. All rights reserved.</p> <div class="footer__legal"> <a href="/privacy">Privacy Policy</a> <a href="/terms">Terms of Service</a> </div> </div> </div> ${renderComponent($$result, "Toaster", Toaster, { "client:load": true, "position": "top-right", "expand": false, "richColors": true, "closeButton": true, "client:component-hydration": "load", "client:component-path": "sonner", "client:component-export": "Toaster" })} </footer>`;
}, "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/components/Footer/Footer.astro", void 0);

export { $$Header as $, $$Footer as a, $$Layout as b, $$SocialIcons as c, mainMenu as m };
