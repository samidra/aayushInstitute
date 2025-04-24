
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
    'index.csr.html': {size: 10280, hash: 'fb8dc69a3f89fe9bb85d022aea8811c823241313404e86ea34d0c76abbfe941c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1199, hash: 'ccc7925fbe1de69a3d2497a6f57490149c2c74298f66a855dc1de13e89eb8278', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 44524, hash: '530188fa084555ae0e0b085b6d1669f22c8d4d0c6c2f9b465d9959eb96a87125', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DUQBEOLS.css': {size: 409148, hash: 'K5cgbR4f3EM', text: () => import('./assets-chunks/styles-DUQBEOLS_css.mjs').then(m => m.default)}
  },
};
