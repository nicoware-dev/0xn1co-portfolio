/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../../chunks/astro/server_D321Zypn.mjs';
import 'kleur/colors';
import { $ as $$Header, m as mainMenu, a as $$Footer, b as $$Layout } from '../../chunks/Footer_DhwpaEJp.mjs';
import { $ as $$Title } from '../../chunks/Title_BR5RLFOp.mjs';
/* empty css                                         */
import { p as portafolioData, c as categoryTitles } from '../../chunks/portfolioData_BiO8lBlJ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://0xn1co-portfolio.vercel.app");
const $$CardPortfolio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
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
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`card scroll-animate ${anim}`, "class")} data-astro-cid-izp2btmp> <div class="card__image-container" data-astro-cid-izp2btmp> <img${addAttribute(imgSrc, "src")}${addAttribute(title, "alt")} loading="lazy" onerror="this.onerror=null; this.src='/img/placeholder-project.webp';" data-astro-cid-izp2btmp> <div class="card__overlay" data-astro-cid-izp2btmp> <div class="card__actions" data-astro-cid-izp2btmp> <a${addAttribute(demoURL, "href")} class="card__button" target="_blank" rel="noopener noreferrer" data-astro-cid-izp2btmp> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": "mdi:eye", "width": "24", "height": "24", "data-astro-cid-izp2btmp": true })} <span class="button-text" data-astro-cid-izp2btmp>Live Demo</span> </a> <a${addAttribute(repoURL, "href")} class="card__button" target="_blank" rel="noopener noreferrer" data-astro-cid-izp2btmp> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": "mdi:github", "width": "24", "height": "24", "data-astro-cid-izp2btmp": true })} <span class="button-text" data-astro-cid-izp2btmp>Code</span> </a> </div> </div> </div> <div class="card__content" data-astro-cid-izp2btmp> <h3 data-astro-cid-izp2btmp>${title}</h3> <p data-astro-cid-izp2btmp>${description}</p> <div class="card__skills" data-astro-cid-izp2btmp> ${skills.map((skill) => renderTemplate`${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": skill, "width": "24", "height": "24", "class": "skill-icon", "data-astro-cid-izp2btmp": true })}`)} </div> </div> </article> `;
}, "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/components/card-portfolio/CardPortfolio.astro", void 0);

const $$Astro = createAstro("https://0xn1co-portfolio.vercel.app");
function getStaticPaths() {
  return Object.keys(categoryTitles).map((category) => ({
    params: { category }
  }));
}
const $$category = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const { category } = Astro2.params;
  const projects = portafolioData.filter((project) => project.category === category);
  const categoryTitle = categoryTitles[category];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${categoryTitle} | Portfolio | Nicolas Dominici`, "data-astro-cid-behdvq2u": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "origin": mainMenu, "data-astro-cid-behdvq2u": true })} ${maybeRenderHead()}<main class="pt-40 pb-20 px-4" data-astro-cid-behdvq2u> <div class="max-w-[var(--max-width)] mx-auto" data-astro-cid-behdvq2u> <div class="text-center mb-16" data-astro-cid-behdvq2u> ${renderComponent($$result2, "Title", $$Title, { "contenido": categoryTitle, "data-astro-cid-behdvq2u": true })} <h2 class="subtitle" data-astro-cid-behdvq2u>Projects Showcase</h2> <a href="/portfolio" class="back-link" data-astro-cid-behdvq2u> ${renderComponent($$result2, "iconify-icon", "iconify-icon", { "icon": "mdi:arrow-left", "width": "20", "height": "20", "data-astro-cid-behdvq2u": true })}
Back to Categories
</a> </div> <div class="portfolio-grid" data-astro-cid-behdvq2u> ${projects.map((project) => renderTemplate`${renderComponent($$result2, "Card", $$CardPortfolio, { ...project, "data-astro-cid-behdvq2u": true })}`)} </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-behdvq2u": true })} ` })} `;
}, "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/pages/portfolio/[category].astro", void 0);

const $$file = "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/pages/portfolio/[category].astro";
const $$url = "/portfolio/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$category,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
