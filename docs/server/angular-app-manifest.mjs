
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
    'index.csr.html': {size: 10065, hash: 'e970d2334b4b60905ad8e2c9e76d39cf3c8a3e508fd222e68acc491464443239', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1199, hash: 'c34c229c993dff3090c582b4567e09dcd71f07960a705156eabafda5142d4970', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 68800, hash: 'c6c52aba3061d2d04e4598b121881f327c383a50dcc4854aacbb694a8b247491', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4N57BBVX.css': {size: 412720, hash: 'OdVGEViuhOg', text: () => import('./assets-chunks/styles-4N57BBVX_css.mjs').then(m => m.default)}
  },
};
