/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_D321Zypn.mjs';
import 'kleur/colors';
import { b as $$Layout, $ as $$Header, m as mainMenu, a as $$Footer } from '../../chunks/Footer_Bz4AiNVI.mjs';
import { g as getServiceBySlug, s as services, $ as $$CallToAction } from '../../chunks/servicesData_B1ZMaLc6.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://0xn1co-portfolio.vercel.app");
function getStaticPaths() {
  return services.map((service) => ({
    params: { slug: service.slug }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const service = getServiceBySlug(slug);
  if (!service) return Astro2.redirect("/404");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${service.title} | Nicolas Dominici`, "data-astro-cid-tcy35dad": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "origin": mainMenu, "data-astro-cid-tcy35dad": true })} ${maybeRenderHead()}<main class="pt-40 pb-20 px-4" data-astro-cid-tcy35dad> <div class="max-w-[var(--max-width)] mx-auto" data-astro-cid-tcy35dad> <div class="text-center mb-16" data-astro-cid-tcy35dad> <h1 class="service-title" data-astro-cid-tcy35dad>${service.title}</h1> </div> <!-- Overview Section --> <div class="content-section mb-20" data-astro-cid-tcy35dad> <p class="section-text" data-astro-cid-tcy35dad>${service.description}</p> </div> <!-- Service Categories --> ${service.categories?.map((category) => renderTemplate`<div class="service-category mb-20" data-astro-cid-tcy35dad> <h2 class="section-title" data-astro-cid-tcy35dad>${category.title}</h2> <div class="category-content" data-astro-cid-tcy35dad> <div class="description-section" data-astro-cid-tcy35dad> <p class="section-text" data-astro-cid-tcy35dad>${category.description}</p> </div> <div class="grid md:grid-cols-2 gap-8 mt-8" data-astro-cid-tcy35dad> <div class="info-card" data-astro-cid-tcy35dad> <h3 class="card-title" data-astro-cid-tcy35dad>Deliverables</h3> <ul class="feature-list" data-astro-cid-tcy35dad> ${category.deliverables.map((item) => renderTemplate`<li class="feature-item" data-astro-cid-tcy35dad>${item}</li>`)} </ul> </div> <div class="info-card" data-astro-cid-tcy35dad> <h3 class="card-title" data-astro-cid-tcy35dad>Outcomes</h3> <ul class="feature-list" data-astro-cid-tcy35dad> ${category.outcomes.map((item) => renderTemplate`<li class="feature-item" data-astro-cid-tcy35dad>${item}</li>`)} </ul> </div> </div> <div class="pricing-section mt-12" data-astro-cid-tcy35dad> <h3 class="subsection-title" data-astro-cid-tcy35dad>Pricing</h3> <div class="pricing-grid" data-astro-cid-tcy35dad> ${category.pricing.map((plan) => renderTemplate`<div class="pricing-card" data-astro-cid-tcy35dad> <h4 class="plan-title" data-astro-cid-tcy35dad>${plan.name}</h4> <div class="price" data-astro-cid-tcy35dad>${plan.price}</div> ${plan.description && renderTemplate`<p class="plan-description" data-astro-cid-tcy35dad>${plan.description}</p>`} </div>`)} </div> </div> </div> </div>`)} ${renderComponent($$result2, "CallToAction", $$CallToAction, { "data-astro-cid-tcy35dad": true })} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-tcy35dad": true })} ` })} `;
}, "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/pages/services/[slug].astro", void 0);

const $$file = "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/pages/services/[slug].astro";
const $$url = "/services/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
