
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/bharath-nagesh.github.io/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 16240, hash: 'dafcb04ca7e101889aed66e37a72d8c92a1a4f5f0e40aca9b427ab163575bc54', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 10252, hash: 'c6289cc35800965bbcc262202b15ed072f350126e57e1b71327a2b5a92083431', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-GLFUI4XR.css': {size: 13370, hash: 'P77MLNiU0eE', text: () => import('./assets-chunks/styles-GLFUI4XR_css.mjs').then(m => m.default)}
  },
};
