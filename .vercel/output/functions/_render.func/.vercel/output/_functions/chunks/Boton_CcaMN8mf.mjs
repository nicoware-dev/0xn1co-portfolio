import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_D321Zypn.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://0xn1co-portfolio.vercel.app");
const $$Boton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Boton;
  const { href, texto, class: className = "primary", target, rel } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`button ${className}`, "class")}${addAttribute(target, "target")}${addAttribute(rel, "rel")} data-astro-cid-yj32bwva> <span data-astro-cid-yj32bwva>${texto}</span> </a> `;
}, "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/components/atoms/Boton.astro", void 0);

export { $$Boton as $ };
