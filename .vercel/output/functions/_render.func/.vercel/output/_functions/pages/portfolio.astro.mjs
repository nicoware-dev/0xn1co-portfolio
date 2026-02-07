/* empty css                                 */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_D321Zypn.mjs';
import 'kleur/colors';
import { $ as $$Header, m as mainMenu, a as $$Footer, b as $$Layout } from '../chunks/Footer_DhwpaEJp.mjs';
import { $ as $$Title } from '../chunks/Title_BR5RLFOp.mjs';
import { c as categoryTitles, a as categoryIcons, b as categoryDescriptions } from '../chunks/portfolioData_BiO8lBlJ.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  const categories = Object.entries(categoryTitles).map(([slug, title]) => ({
    title,
    icon: categoryIcons[slug],
    description: categoryDescriptions[slug],
    slug
  }));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portfolio | Nicolas Dominici", "description": "Explore my portfolio of AI automation projects, web development work, and innovative solutions across multiple categories.", "image": "/og-image.png", "type": "website", "data-astro-cid-hcjuqwdu": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "origin": mainMenu, "data-astro-cid-hcjuqwdu": true })} ${maybeRenderHead()}<main class="pt-40 pb-20 px-4" data-astro-cid-hcjuqwdu> <div class="max-w-[var(--max-width)] mx-auto" data-astro-cid-hcjuqwdu> <div class="text-center mb-16" data-astro-cid-hcjuqwdu> ${renderComponent($$result2, "Title", $$Title, { "contenido": "Portfolio", "data-astro-cid-hcjuqwdu": true })} <h2 class="subtitle" data-astro-cid-hcjuqwdu>Browse Projects by Category</h2> </div> <div class="categories-grid" data-astro-cid-hcjuqwdu> ${categories.map((category) => renderTemplate`<a${addAttribute(`/portfolio/${category.slug}`, "href")} class="category-card scroll-animate fade-up" data-astro-cid-hcjuqwdu> <div class="icon-wrapper" data-astro-cid-hcjuqwdu> ${renderComponent($$result2, "iconify-icon", "iconify-icon", { "icon": category.icon, "width": "40", "height": "40", "data-astro-cid-hcjuqwdu": true })} </div> <h3 data-astro-cid-hcjuqwdu>${category.title}</h3> <p data-astro-cid-hcjuqwdu>${category.description}</p> <div class="arrow-icon" data-astro-cid-hcjuqwdu> ${renderComponent($$result2, "iconify-icon", "iconify-icon", { "icon": "mdi:arrow-right", "width": "24", "height": "24", "data-astro-cid-hcjuqwdu": true })} </div> </a>`)} </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-hcjuqwdu": true })} ` })} `;
}, "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/pages/portfolio.astro", void 0);

const $$file = "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/pages/portfolio.astro";
const $$url = "/portfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Portfolio,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
