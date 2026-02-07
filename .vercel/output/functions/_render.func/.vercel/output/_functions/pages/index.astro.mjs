/* empty css                                 */
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as addAttribute, c as createAstro } from '../chunks/astro/server_D321Zypn.mjs';
import 'kleur/colors';
import { c as $$SocialIcons, $ as $$Header, m as mainMenu, a as $$Footer, b as $$Layout } from '../chunks/Footer_DhwpaEJp.mjs';
import { $ as $$Title } from '../chunks/Title_BR5RLFOp.mjs';
import { $ as $$Boton } from '../chunks/Boton_CcaMN8mf.mjs';
/* empty css                                 */
import { g as getCollection, $ as $$FormattedDate } from '../chunks/_astro_content_ly-LYh9f.mjs';
import 'clsx';
import { s as services, $ as $$CallToAction } from '../chunks/servicesData_B2EO8Q3G.mjs';
import { c as categoryTitles, a as categoryIcons } from '../chunks/portfolioData_BiO8lBlJ.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="about" class="about" data-astro-cid-vky6iplv> <div class="about__container" data-astro-cid-vky6iplv> <div class="about__content" data-astro-cid-vky6iplv> ${renderComponent($$result, "Title", $$Title, { "margin": "1rem", "contenido": "About Me", "data-astro-cid-vky6iplv": true })} <p class="about__text" data-astro-cid-vky6iplv>
I'm an AI Automation & Agentic Systems Engineer with 10+ years across engineering, software, and technical leadership. I design production‑ready n8n automations, multi‑agent architectures, and intelligent workflows that connect LLMs, tools, and data systems to deliver measurable outcomes—fewer manual steps, faster cycles, and higher reliability. I bridge complex AI with practical business value. </p> <div class="social-icons-container" data-astro-cid-vky6iplv> ${renderComponent($$result, "SocialIcons", $$SocialIcons, { "width": "25", "height": "25", "data-astro-cid-vky6iplv": true })} </div> <div class="button-wrapper" data-astro-cid-vky6iplv> ${renderComponent($$result, "Boton", $$Boton, { "href": "/about", "texto": "More About Me", "class": "primary", "data-astro-cid-vky6iplv": true })} </div> </div> </div> </section> `;
}, "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/components/About/About.astro", void 0);

const $$BlogHome = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog", ({ data }) => {
    return !data.draft ;
  });
  const latestPosts = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()).slice(0, 3);
  return renderTemplate`${maybeRenderHead()}<section id="blog" class="blog-section" data-astro-cid-2obfiiqs> <div class="blog-container" data-astro-cid-2obfiiqs> <div class="section-header" data-astro-cid-2obfiiqs> ${renderComponent($$result, "Title", $$Title, { "contenido": "Latest Insights", "data-astro-cid-2obfiiqs": true })} <p class="section-subtitle" data-astro-cid-2obfiiqs>Thoughts and Perspectives on Technology and Innovation</p> </div> <div class="blog-grid" data-astro-cid-2obfiiqs> ${latestPosts.map((post) => renderTemplate`<article class="blog-card scroll-animate fade-up" data-astro-cid-2obfiiqs> <div class="card-image" data-astro-cid-2obfiiqs> <img${addAttribute(post.data.heroImage, "src")}${addAttribute(post.data.title, "alt")} loading="lazy" data-astro-cid-2obfiiqs> <div class="date-badge" data-astro-cid-2obfiiqs> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "clase": "date-text", "data-astro-cid-2obfiiqs": true })} </div> </div> <div class="card-content" data-astro-cid-2obfiiqs> <h3 data-astro-cid-2obfiiqs>${post.data.title}</h3> <p data-astro-cid-2obfiiqs>${post.data.description}</p> <a${addAttribute(`/blog/${post.slug}/`, "href")} class="read-more" data-astro-cid-2obfiiqs>
Read More
${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": "mdi:arrow-right", "width": "20", "height": "20", "data-astro-cid-2obfiiqs": true })} </a> </div> </article>`)} </div> <div class="section-footer" data-astro-cid-2obfiiqs> <a href="/blog" class="view-all" data-astro-cid-2obfiiqs>
View All Articles
${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": "mdi:arrow-right", "width": "24", "height": "24", "data-astro-cid-2obfiiqs": true })} </a> </div> </div> </section> `;
}, "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/components/BlogHome.astro", void 0);

const $$Astro = createAstro("https://0xn1co-portfolio.vercel.app");
const $$ProfileImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProfileImage;
  const { size = "md", className = "" } = Astro2.props;
  const sizes = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-24 h-24",
    xl: "w-96 h-96"
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`profile-image ${sizes[size]} ${className}`, "class")} data-astro-cid-ru6grlqw> <img src="/img/profile.png" alt="Nicolas Dominici" class="w-full h-full object-cover"${addAttribute(384, "width")}${addAttribute(384, "height")} data-astro-cid-ru6grlqw> </div> `;
}, "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/components/ProfileImage.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero" data-astro-cid-ar5v7lgx> <div class="hero__container" data-astro-cid-ar5v7lgx> <div class="text__content stagger-children" data-astro-cid-ar5v7lgx> <div class="title-wrapper" data-astro-cid-ar5v7lgx> <span class="pre-title animate fade-in-down" data-astro-cid-ar5v7lgx>AI Automation & Agentic Systems Engineer</span> <h1 class="hero__title color__gradiente animate fade-in" data-astro-cid-ar5v7lgx>Nicolas Dominici</h1> </div> <p class="hero__text animate fade-in-up animate-delay-200" data-astro-cid-ar5v7lgx>
Building agentic systems, n8n workflows, and intelligent automation for real business outcomes
</p> <div class="roles animate fade-in-up animate-delay-300" data-astro-cid-ar5v7lgx> <span data-astro-cid-ar5v7lgx>AI Automation Engineer</span> <span class="separator" data-astro-cid-ar5v7lgx>•</span> <span data-astro-cid-ar5v7lgx>Multi-Agent Architect</span> <span class="separator" data-astro-cid-ar5v7lgx>•</span> <span data-astro-cid-ar5v7lgx>n8n Specialist</span> <span class="separator" data-astro-cid-ar5v7lgx>•</span> <span data-astro-cid-ar5v7lgx>Full‑stack Developer</span> </div> <div class="button-group animate fade-in-up animate-delay-400" data-astro-cid-ar5v7lgx> ${renderComponent($$result, "Boton", $$Boton, { "href": "/services", "texto": "Services", "class": "primary", "data-astro-cid-ar5v7lgx": true })} ${renderComponent($$result, "Boton", $$Boton, { "href": "/portfolio", "texto": "Portfolio", "class": "secondary", "data-astro-cid-ar5v7lgx": true })} </div> </div> <div class="image-wrapper animate scale-in animate-delay-200" data-astro-cid-ar5v7lgx> ${renderComponent($$result, "ProfileImage", $$ProfileImage, { "size": "xl", "className": "hero__img", "data-astro-cid-ar5v7lgx": true })} <div class="glow-effect" data-astro-cid-ar5v7lgx></div> </div> </div> </section> `;
}, "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/components/hero/Hero.astro", void 0);

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const techStack = [
    { name: "HTML", icon: "vscode-icons:file-type-html" },
    { name: "CSS", icon: "vscode-icons:file-type-css" },
    { name: "Tailwind", icon: "logos:tailwindcss-icon" },
    { name: "React", icon: "logos:react" },
    { name: "Angular", icon: "logos:angular-icon" },
    { name: "JavaScript", icon: "logos:javascript" },
    { name: "TypeScript", icon: "logos:typescript-icon" },
    { name: "Python", icon: "logos:python" },
    { name: "Solidity", icon: "logos:solidity" },
    { name: "Ethereum", icon: "logos:ethereum" },
    {
      name: "n8n",
      isImage: true,
      src: "/assets/n8n.svg"
    },
    { name: "Node.js", icon: "logos:nodejs-icon" },
    { name: "Docker", icon: "logos:docker-icon" },
    { name: "MongoDB", icon: "logos:mongodb-icon" }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="skills" class="py-20" data-astro-cid-gmga6xar> <div class="max-w-[var(--max-width)] mx-auto px-4" data-astro-cid-gmga6xar> <div class="text-center mb-16" data-astro-cid-gmga6xar> ${renderComponent($$result, "Title", $$Title, { "contenido": "Technical Expertise", "data-astro-cid-gmga6xar": true })} <p class="section-subtitle" data-astro-cid-gmga6xar>Technologies and tools I work with</p> </div> <div class="tech-grid" data-astro-cid-gmga6xar> ${techStack.map((tech) => renderTemplate`<div class="tech-card" data-astro-cid-gmga6xar> <div class="icon-wrapper" data-astro-cid-gmga6xar> ${tech.isImage ? renderTemplate`<img${addAttribute(tech.src, "src")}${addAttribute(tech.name, "alt")} data-astro-cid-gmga6xar>` : renderTemplate`${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": tech.icon, "width": "48", "height": "48", "data-astro-cid-gmga6xar": true })}`} </div> <span class="tech-name" data-astro-cid-gmga6xar>${tech.name}</span> </div>`)} </div> </div> </section> `;
}, "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/components/skills/Skills.astro", void 0);

const $$ProjectsOverview = createComponent(($$result, $$props, $$slots) => {
  const categories = Object.entries(categoryTitles).map(([slug, title]) => ({
    title,
    icon: categoryIcons[slug],
    slug
  }));
  return renderTemplate`${maybeRenderHead()}<section class="projects-overview py-20" data-astro-cid-xf56uvh7> <div class="max-w-[var(--max-width)] mx-auto px-4" data-astro-cid-xf56uvh7> <div class="text-center mb-16" data-astro-cid-xf56uvh7> ${renderComponent($$result, "Title", $$Title, { "contenido": "What I Can Do", "data-astro-cid-xf56uvh7": true })} <p class="section-subtitle" data-astro-cid-xf56uvh7>Explore my portfolio projects and interactive technology demonstrations</p> </div> <div class="overview-card" data-astro-cid-xf56uvh7> <div class="categories-grid" data-astro-cid-xf56uvh7> ${categories.map((category) => renderTemplate`<a${addAttribute(`/portfolio/${category.slug}`, "href")} class="category-item" data-astro-cid-xf56uvh7> <div class="icon-wrapper" data-astro-cid-xf56uvh7> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": category.icon, "width": "24", "height": "24", "data-astro-cid-xf56uvh7": true })} </div> <span data-astro-cid-xf56uvh7>${category.title}</span> <div class="arrow-icon" data-astro-cid-xf56uvh7> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": "mdi:arrow-right", "width": "20", "height": "20", "data-astro-cid-xf56uvh7": true })} </div> </a>`)} </div> </div> </div> </section> `;
}, "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/components/ProjectsOverview.astro", void 0);

const $$ServicesOverview = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="services-overview py-20" data-astro-cid-ijt4t2wa> <div class="max-w-[var(--max-width)] mx-auto px-4" data-astro-cid-ijt4t2wa> <div class="text-center mb-16" data-astro-cid-ijt4t2wa> ${renderComponent($$result, "Title", $$Title, { "contenido": "Services", "data-astro-cid-ijt4t2wa": true })} <p class="section-subtitle" data-astro-cid-ijt4t2wa>Empowering Your Business Through Technology</p> </div> <div class="grid md:grid-cols-2 gap-8" data-astro-cid-ijt4t2wa> ${services.map((service) => renderTemplate`<a${addAttribute(`/services/${service.slug}`, "href")} class="service-card" data-astro-cid-ijt4t2wa> <div class="service-icon" data-astro-cid-ijt4t2wa> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": service.icon, "width": "40", "height": "40", "data-astro-cid-ijt4t2wa": true })} </div> <h3 class="service-title" data-astro-cid-ijt4t2wa>${service.title}</h3> <p class="service-description" data-astro-cid-ijt4t2wa>${service.description}</p> <ul class="service-features" data-astro-cid-ijt4t2wa> ${service.features.map((feature) => renderTemplate`<li data-astro-cid-ijt4t2wa>${feature}</li>`)} </ul> <div class="learn-more" data-astro-cid-ijt4t2wa> <span data-astro-cid-ijt4t2wa>Learn More</span> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": "mdi:arrow-right", "width": "20", "height": "20", "data-astro-cid-ijt4t2wa": true })} </div> </a>`)} </div> </div> </section> `;
}, "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/components/ServicesOverview.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nicolas Dominici | Software Engineer", "description": "AI Automation & Agentic Systems Engineer. Building innovative solutions with n8n, multi-agent LLM workflows, and intelligent automation.", "image": "/og-image.png", "type": "website", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="app-container" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Header", $$Header, { "origin": mainMenu, "data-astro-cid-j7pv25f6": true })} <main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "About", $$About, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Skills", $$Skills, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "ServicesOverview", $$ServicesOverview, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "ProjectsOverview", $$ProjectsOverview, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "CallToAction", $$CallToAction, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "BlogHome", $$BlogHome, { "data-astro-cid-j7pv25f6": true })} </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} </div> ` })} `;
}, "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
