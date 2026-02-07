/* empty css                                 */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D321Zypn.mjs';
import 'kleur/colors';
import { $ as $$Header, m as mainMenu, a as $$Footer, b as $$Layout } from '../chunks/Footer_DhwpaEJp.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 - Page Not Found", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "origin": mainMenu, "data-astro-cid-zetdm5md": true })} ${maybeRenderHead()}<main class="error-page" data-astro-cid-zetdm5md> <div class="error-content" data-astro-cid-zetdm5md> <div class="error-code" data-astro-cid-zetdm5md>404</div> <h1 data-astro-cid-zetdm5md>Page Not Found</h1> <p data-astro-cid-zetdm5md>The page you're looking for doesn't exist or has been moved.</p> <div class="actions" data-astro-cid-zetdm5md> <a href="/" class="primary-button" data-astro-cid-zetdm5md> ${renderComponent($$result2, "iconify-icon", "iconify-icon", { "icon": "mdi:home", "width": "24", "height": "24", "data-astro-cid-zetdm5md": true })}
Back to Home
</a> <a href="/contact" class="secondary-button" data-astro-cid-zetdm5md> ${renderComponent($$result2, "iconify-icon", "iconify-icon", { "icon": "mdi:contact", "width": "24", "height": "24", "data-astro-cid-zetdm5md": true })}
Contact Support
</a> </div> <div class="error-background" data-astro-cid-zetdm5md> ${renderComponent($$result2, "iconify-icon", "iconify-icon", { "icon": "mdi:robot-confused", "width": "200", "height": "200", "data-astro-cid-zetdm5md": true })} </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-zetdm5md": true })} ` })} `;
}, "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/pages/404.astro", void 0);

const $$file = "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
