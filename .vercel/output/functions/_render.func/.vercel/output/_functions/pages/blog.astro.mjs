/* empty css                                 */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_D321Zypn.mjs';
import 'kleur/colors';
import { $ as $$Header, m as mainMenu, a as $$Footer, b as $$Layout } from '../chunks/Footer_DhwpaEJp.mjs';
import { $ as $$Title } from '../chunks/Title_BR5RLFOp.mjs';
import { g as getCollection, $ as $$FormattedDate } from '../chunks/_astro_content_ly-LYh9f.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog", ({ data }) => {
    return !data.draft ;
  });
  const sortedPosts = posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog | Nicolas Dominici", "description": "Explore insights on AI automation, agentic systems, web development, and modern technology. Written by Nicolas Dominici.", "image": "/og-image.png", "type": "website", "data-astro-cid-5tznm7mj": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "origin": mainMenu, "data-astro-cid-5tznm7mj": true })} ${maybeRenderHead()}<main class="pt-40 pb-20 px-4" data-astro-cid-5tznm7mj> <div class="max-w-[var(--max-width)] mx-auto" data-astro-cid-5tznm7mj> <div class="text-center mb-16" data-astro-cid-5tznm7mj> ${renderComponent($$result2, "Title", $$Title, { "contenido": "Latest Insights", "data-astro-cid-5tznm7mj": true })} <h2 class="subtitle" data-astro-cid-5tznm7mj>Thoughts and Perspectives on Technology and Innovation</h2> </div> <div class="blog-grid" data-astro-cid-5tznm7mj> ${sortedPosts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.slug}/`, "href")} class="blog-card scroll-animate fade-up" data-astro-cid-5tznm7mj> <div class="card-image" data-astro-cid-5tznm7mj> <img${addAttribute(post.data.heroImage, "src")}${addAttribute(post.data.title, "alt")} loading="lazy" data-astro-cid-5tznm7mj> <div class="date-badge" data-astro-cid-5tznm7mj> ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "clase": "date-text", "data-astro-cid-5tznm7mj": true })} </div> </div> <div class="card-content" data-astro-cid-5tznm7mj> <h3 data-astro-cid-5tznm7mj>${post.data.title}</h3> <p data-astro-cid-5tznm7mj>${post.data.description}</p> <div class="read-more" data-astro-cid-5tznm7mj>
Read More
${renderComponent($$result2, "iconify-icon", "iconify-icon", { "icon": "mdi:arrow-right", "width": "20", "height": "20", "data-astro-cid-5tznm7mj": true })} </div> </div> </a>`)} </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-5tznm7mj": true })} ` })} `;
}, "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/pages/blog/index.astro", void 0);
const $$file = "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
