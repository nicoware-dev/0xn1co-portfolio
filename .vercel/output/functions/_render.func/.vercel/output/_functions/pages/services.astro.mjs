/* empty css                                 */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_D321Zypn.mjs';
import 'kleur/colors';
import { $ as $$Header, m as mainMenu, a as $$Footer, b as $$Layout } from '../chunks/Footer_Bz4AiNVI.mjs';
import { $ as $$Title } from '../chunks/Title_C5xcF7xu.mjs';
import { s as services, $ as $$CallToAction } from '../chunks/servicesData_B1ZMaLc6.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Services | Nicolas Dominici", "description": "Professional services including AI automation, web development, multi-agent LLM workflows, and strategic consulting.", "image": "/og-image.png", "type": "website", "data-astro-cid-ucd2ps2b": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "origin": mainMenu, "data-astro-cid-ucd2ps2b": true })} ${maybeRenderHead()}<main class="pt-40 pb-20 px-4" data-astro-cid-ucd2ps2b> <div class="max-w-[var(--max-width)] mx-auto" data-astro-cid-ucd2ps2b> <div class="text-center mb-16" data-astro-cid-ucd2ps2b> ${renderComponent($$result2, "Title", $$Title, { "contenido": "Services", "data-astro-cid-ucd2ps2b": true })} <h2 class="subtitle" data-astro-cid-ucd2ps2b>Empowering Your Business Through Technology</h2> </div> <div class="grid md:grid-cols-2 gap-8 mb-20" data-astro-cid-ucd2ps2b> ${services.map((service) => renderTemplate`<a${addAttribute(`/services/${service.slug}`, "href")} class="service-card" data-astro-cid-ucd2ps2b> <div class="service-icon" data-astro-cid-ucd2ps2b> ${renderComponent($$result2, "iconify-icon", "iconify-icon", { "icon": service.icon, "width": "40", "height": "40", "data-astro-cid-ucd2ps2b": true })} </div> <h3 class="service-title" data-astro-cid-ucd2ps2b>${service.title}</h3> <p class="service-description" data-astro-cid-ucd2ps2b>${service.description}</p> <ul class="service-features" data-astro-cid-ucd2ps2b> ${service.features.map((feature) => renderTemplate`<li data-astro-cid-ucd2ps2b>${feature}</li>`)} </ul> <div class="learn-more" data-astro-cid-ucd2ps2b> <span data-astro-cid-ucd2ps2b>Learn More</span> ${renderComponent($$result2, "iconify-icon", "iconify-icon", { "icon": "mdi:arrow-right", "width": "20", "height": "20", "data-astro-cid-ucd2ps2b": true })} </div> </a>`)} </div> <div class="approach-section mb-20" data-astro-cid-ucd2ps2b> <h2 class="approach-title" data-astro-cid-ucd2ps2b>My Approach</h2> <div class="approach-grid" data-astro-cid-ucd2ps2b> <div class="approach-card" data-astro-cid-ucd2ps2b> <div class="approach-icon" data-astro-cid-ucd2ps2b> ${renderComponent($$result2, "iconify-icon", "iconify-icon", { "icon": "mdi:handshake", "width": "32", "height": "32", "data-astro-cid-ucd2ps2b": true })} </div> <h3 data-astro-cid-ucd2ps2b>Collaborative Partnership</h3> <p data-astro-cid-ucd2ps2b>Working closely with you to understand your vision and goals.</p> </div> <div class="approach-card" data-astro-cid-ucd2ps2b> <div class="approach-icon" data-astro-cid-ucd2ps2b> ${renderComponent($$result2, "iconify-icon", "iconify-icon", { "icon": "mdi:tools", "width": "32", "height": "32", "data-astro-cid-ucd2ps2b": true })} </div> <h3 data-astro-cid-ucd2ps2b>Customized Solutions</h3> <p data-astro-cid-ucd2ps2b>Tailoring services to meet your specific requirements.</p> </div> <div class="approach-card" data-astro-cid-ucd2ps2b> <div class="approach-icon" data-astro-cid-ucd2ps2b> ${renderComponent($$result2, "iconify-icon", "iconify-icon", { "icon": "mdi:star", "width": "32", "height": "32", "data-astro-cid-ucd2ps2b": true })} </div> <h3 data-astro-cid-ucd2ps2b>Quality and Excellence</h3> <p data-astro-cid-ucd2ps2b>Committing to high standards in every project.</p> </div> <div class="approach-card" data-astro-cid-ucd2ps2b> <div class="approach-icon" data-astro-cid-ucd2ps2b> ${renderComponent($$result2, "iconify-icon", "iconify-icon", { "icon": "mdi:lifebuoy", "width": "32", "height": "32", "data-astro-cid-ucd2ps2b": true })} </div> <h3 data-astro-cid-ucd2ps2b>Continuous Support</h3> <p data-astro-cid-ucd2ps2b>Providing ongoing assistance to ensure sustained success.</p> </div> </div> </div> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "data-astro-cid-ucd2ps2b": true })} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-ucd2ps2b": true })} ` })} `;
}, "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/pages/services.astro", void 0);

const $$file = "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Services,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
