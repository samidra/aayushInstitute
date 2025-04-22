
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/aayushInstitute/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/aayushInstitute"
  },
  {
    "renderMode": 2,
    "redirectTo": "/aayushInstitute",
    "route": "/aayushInstitute/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 10280, hash: '11a919f47563b806e0647711c6f5db5fd84bc9ce0f785e646b9d6b73ae4dcbd8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1199, hash: '80d378378616ff16eb7287da4f78a5e75252335a5b505723b702a7705ff55f67', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 34182, hash: '0df0d1146aead1bf87d3ea3c2c257c99659f0c8c7c8538427e45466098083c78', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DUQBEOLS.css': {size: 409148, hash: 'K5cgbR4f3EM', text: () => import('./assets-chunks/styles-DUQBEOLS_css.mjs').then(m => m.default)}
  },
};
