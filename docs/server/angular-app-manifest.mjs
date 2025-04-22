
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
    'index.csr.html': {size: 10280, hash: '1d992a41573eeff525d0b676a4c36cb37fbad3fc806d3fb18f8b3775376b21fe', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1199, hash: 'd8c7918bfbc6d04314abc2fa824bff73eade97b8e60a08cdacebb6a0f42a6500', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 33498, hash: 'ee68abf8e6a1bf2522d1d929d217ca2789d824577dd9a5ca8c1793c4eebdfe16', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DUQBEOLS.css': {size: 409148, hash: 'K5cgbR4f3EM', text: () => import('./assets-chunks/styles-DUQBEOLS_css.mjs').then(m => m.default)}
  },
};
