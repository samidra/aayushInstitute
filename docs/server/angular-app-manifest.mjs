
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
    'index.csr.html': {size: 10280, hash: '6e397ba046276908f4a64f5183a715f7924c34ef9d2a6e17513a423b4f727116', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1199, hash: '7f0c19b48405632e2d5363ef8f8768d8960961ea2a2a78546682cf3a8713a935', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 44375, hash: '29e62264bca142ea0ce7cfcf2ccba2507b41c50d6f4ff95d7cee0b056fc0fb60', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DUQBEOLS.css': {size: 409148, hash: 'K5cgbR4f3EM', text: () => import('./assets-chunks/styles-DUQBEOLS_css.mjs').then(m => m.default)}
  },
};
