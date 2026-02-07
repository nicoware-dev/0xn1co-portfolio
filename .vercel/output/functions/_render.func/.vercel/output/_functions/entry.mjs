import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BUTFVjak.mjs';
import { manifest } from './manifest_DDq1iWe3.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/contact.astro.mjs');
const _page4 = () => import('./pages/api/subscribe.astro.mjs');
const _page5 = () => import('./pages/api/utils/email.astro.mjs');
const _page6 = () => import('./pages/blog.astro.mjs');
const _page7 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page8 = () => import('./pages/case-studies/_slug_.astro.mjs');
const _page9 = () => import('./pages/case-studies.astro.mjs');
const _page10 = () => import('./pages/contact.astro.mjs');
const _page11 = () => import('./pages/portfolio.astro.mjs');
const _page12 = () => import('./pages/services/_slug_.astro.mjs');
const _page13 = () => import('./pages/services.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/contact.ts", _page3],
    ["src/pages/api/subscribe.ts", _page4],
    ["src/pages/api/utils/email.ts", _page5],
    ["src/pages/blog/index.astro", _page6],
    ["src/pages/blog/[...slug].astro", _page7],
    ["src/pages/case-studies/[slug].astro", _page8],
    ["src/pages/case-studies/index.astro", _page9],
    ["src/pages/contact.astro", _page10],
    ["src/pages/portfolio.astro", _page11],
    ["src/pages/services/[slug].astro", _page12],
    ["src/pages/services.astro", _page13],
    ["src/pages/index.astro", _page14]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "5e98fcdf-af7d-4333-ba22-02b7ab3f7b49",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
