
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
    'index.csr.html': {size: 10065, hash: '079b3e09fd9f886f1f13f238c2f76f6ead96cf152d881601933c840739fce93f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1199, hash: '3fb150d2910e91e19a97aba6ddff50d8a9759424869d1b2ea3333914d44316fc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 50197, hash: 'c6e340f3c1d1a335bb784162596cf15cf991fd7b2f8dc391c8b451893458e467', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-K4ZDVGAZ.css': {size: 408933, hash: 'w3/AhGTsNFU', text: () => import('./assets-chunks/styles-K4ZDVGAZ_css.mjs').then(m => m.default)}
  },
};
