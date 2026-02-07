/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../chunks/astro/server_D321Zypn.mjs';
import 'kleur/colors';
import { $ as $$Header, m as mainMenu, a as $$Footer, b as $$Layout } from '../chunks/Footer_Bz4AiNVI.mjs';
import { $ as $$Title } from '../chunks/Title_C5xcF7xu.mjs';
/* empty css                                     */
import { c as categoryTitles, p as portafolioData } from '../chunks/portfolioData_CAegd_FN.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://0xn1co-portfolio.vercel.app");
const $$CardPortfolio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardPortfolio;
  const {
    imgSrc,
    title,
    description,
    skills,
    demoURL,
    repoURL,
    anim = "fade-up"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`card scroll-animate ${anim}`, "class")} data-astro-cid-izp2btmp> <div class="card__image-container" data-astro-cid-izp2btmp> <img${addAttribute(imgSrc, "src")}${addAttribute(title, "alt")} loading="lazy" onerror="this.onerror=null; this.src='/img/placeholder-project.webp';" data-astro-cid-izp2btmp> <div class="card__overlay" data-astro-cid-izp2btmp> <div class="card__actions" data-astro-cid-izp2btmp> <a${addAttribute(demoURL, "href")} class="card__button primary" target="_blank" rel="noopener noreferrer" data-astro-cid-izp2btmp> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": "mdi:eye", "width": "20", "height": "20", "data-astro-cid-izp2btmp": true })} <span class="button-text" data-astro-cid-izp2btmp>Live Demo</span> </a> <a${addAttribute(repoURL, "href")} class="card__button secondary" target="_blank" rel="noopener noreferrer" data-astro-cid-izp2btmp> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": "mdi:github", "width": "20", "height": "20", "data-astro-cid-izp2btmp": true })} <span class="button-text" data-astro-cid-izp2btmp>Code</span> </a> </div> </div> </div> <div class="card__content" data-astro-cid-izp2btmp> <div class="card__header" data-astro-cid-izp2btmp> <h3 data-astro-cid-izp2btmp>${title}</h3> <div class="card__skills" data-astro-cid-izp2btmp> ${skills.map((skill) => renderTemplate`<div class="skill-pill" data-astro-cid-izp2btmp> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": skill, "width": "16", "height": "16", "data-astro-cid-izp2btmp": true })} </div>`)} </div> </div> <p data-astro-cid-izp2btmp>${description}</p> </div> </article> `;
}, "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/components/card-portfolio/CardPortfolio.astro", void 0);

const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  const categories = [
    { slug: "all", title: "All Projects" },
    ...Object.entries(categoryTitles).map(([slug, title]) => ({ slug, title }))
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portfolio | Nicolas Dominici", "description": "Explore my portfolio of AI automation projects, web development work, and innovative solutions.", "image": "/og-image.png", "type": "website", "data-astro-cid-hcjuqwdu": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "origin": mainMenu, "data-astro-cid-hcjuqwdu": true })} ${maybeRenderHead()}<main class="pt-40 pb-20 px-4" data-astro-cid-hcjuqwdu> <div class="max-w-[var(--max-width)] mx-auto" data-astro-cid-hcjuqwdu> <div class="text-center mb-12" data-astro-cid-hcjuqwdu> ${renderComponent($$result2, "Title", $$Title, { "contenido": "Portfolio", "data-astro-cid-hcjuqwdu": true })} <h2 class="subtitle" data-astro-cid-hcjuqwdu>My Recent Work</h2> </div> <div class="filters-container mb-12" data-astro-cid-hcjuqwdu> <div class="filters-scroll" data-astro-cid-hcjuqwdu> ${categories.map((category, index) => renderTemplate`<button${addAttribute(`filter-btn ${index === 0 ? "active" : ""}`, "class")}${addAttribute(category.slug, "data-filter")} data-astro-cid-hcjuqwdu> ${category.title} </button>`)} </div> </div> <div class="portfolio-grid" id="portfolio-grid" data-astro-cid-hcjuqwdu> ${portafolioData.map((project) => renderTemplate`<div class="project-item"${addAttribute(Array.isArray(project.category) ? project.category.join(",") : project.category, "data-category")} data-astro-cid-hcjuqwdu> ${renderComponent($$result2, "Card", $$CardPortfolio, { ...project, "data-astro-cid-hcjuqwdu": true })} </div>`)} </div> <div id="no-results" class="hidden text-center py-12" data-astro-cid-hcjuqwdu> <p class="text-[var(--primary-80)] text-xl" data-astro-cid-hcjuqwdu>No projects found in this category.</p> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-hcjuqwdu": true })} ` })}  `;
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
