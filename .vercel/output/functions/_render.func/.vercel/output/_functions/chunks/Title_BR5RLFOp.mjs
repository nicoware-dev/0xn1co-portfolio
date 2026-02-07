import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_D321Zypn.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://0xn1co-portfolio.vercel.app");
const $$Title = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Title;
  const { contenido, margin } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2 class="color__gradiente"${addAttribute(`margin-bottom:${margin}`, "style")} data-astro-cid-3zqmlas2>${contenido}</h2> `;
}, "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/components/atoms/Title.astro", void 0);

export { $$Title as $ };
