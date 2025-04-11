
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 16051, hash: '94e3346cc2d4b2fb470adec4fa548c789c2caf8a689b410cef28c7482463253f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 10063, hash: 'aa6e97bca11081e0f71f096c76148785423059a427fc7bdb6f155850f6a072b6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-GLFUI4XR.css': {size: 13370, hash: 'P77MLNiU0eE', text: () => import('./assets-chunks/styles-GLFUI4XR_css.mjs').then(m => m.default)}
  },
};
