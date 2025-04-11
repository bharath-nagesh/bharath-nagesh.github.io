
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 16215, hash: '09b0e29b01dca7dfd56f52ac27356eaa5f7fecd96fdd71182b4f3040d5eb0c17', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 10227, hash: '23b72bcb0c54db2f889bfe7b5874e79f7c7180e46991707289ad3b6435743547', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-GLFUI4XR.css': {size: 13370, hash: 'P77MLNiU0eE', text: () => import('./assets-chunks/styles-GLFUI4XR_css.mjs').then(m => m.default)}
  },
};
