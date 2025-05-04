
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
    'index.csr.html': {size: 10065, hash: '7e42aa6a9dfb92bc84459875d9113711d907fbd1ced35790735cd9d17091c743', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1199, hash: '3792f843ecc7bc232280dd0e2bd9af68de2a5390a9654816e7cd3b5ffe64bb5d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 63718, hash: 'c1f1a47876f5495c7abc1c23b04adf29254e88a72e116d4b8afcd3586f2a4600', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-K4ZDVGAZ.css': {size: 408933, hash: 'w3/AhGTsNFU', text: () => import('./assets-chunks/styles-K4ZDVGAZ_css.mjs').then(m => m.default)}
  },
};
