
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
    'index.csr.html': {size: 10065, hash: '738c23cbe2704d9e5aca167a272a97b120825e532475e17d992c64944635d83a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1199, hash: '197a0cb96d4067689b96fd5a24d684d07d0e8702794d435df54b44976cb126c7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 63573, hash: 'c5a5618ebe21f4bb23cb0cd39011a4025af83136f498708607b2c7499603673c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4N57BBVX.css': {size: 412720, hash: 'OdVGEViuhOg', text: () => import('./assets-chunks/styles-4N57BBVX_css.mjs').then(m => m.default)}
  },
};
