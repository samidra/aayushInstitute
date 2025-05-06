
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
    'index.csr.html': {size: 10065, hash: 'f4422fc5b90a4b9e7b0a2fc85bdc48abe7383f7c9397b5e966246ceab6784d85', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1199, hash: '4b904f5180f1030792444773bebb9f7f97bfcd7170c2a626dcdf3348400a70e5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 63932, hash: '717144d2161a4c0f403d0dc5c65e919281b546b2e7998cf06b5db53eacf0c8c7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4N57BBVX.css': {size: 412720, hash: 'OdVGEViuhOg', text: () => import('./assets-chunks/styles-4N57BBVX_css.mjs').then(m => m.default)}
  },
};
