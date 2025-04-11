
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://bharath-nagesh.github.io/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 16247, hash: 'abaa2cb3fca695db520a5b9d8ae2ddfa7b9a55f33d49394628e7913c62cf3122', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 10259, hash: '6c106eecf8d51cc9f8ed66890c5bc90ee97c67909c5b6db9a6d7e82067a398af', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-GLFUI4XR.css': {size: 13370, hash: 'P77MLNiU0eE', text: () => import('./assets-chunks/styles-GLFUI4XR_css.mjs').then(m => m.default)}
  },
};
