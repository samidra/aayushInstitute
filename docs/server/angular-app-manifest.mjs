
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
    'index.csr.html': {size: 10065, hash: 'ec77d8dc5444ca932680f413763787bf1076f9a904e3cfa6f58233898da9f1fe', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1199, hash: '18cef232ab6e8eee2933c0efe9ec4a1f6b690b4be988e9f1fd24ad7ec9a405c2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 46154, hash: '0b13bb74aec5084695d7c1daaf7aef72a64652be53ad09f57ca6d6509c4ae691', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-K4ZDVGAZ.css': {size: 408933, hash: 'w3/AhGTsNFU', text: () => import('./assets-chunks/styles-K4ZDVGAZ_css.mjs').then(m => m.default)}
  },
};
