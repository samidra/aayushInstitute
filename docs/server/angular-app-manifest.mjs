
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
    'index.csr.html': {size: 10065, hash: '555bcb70509ba623f15f8344d01ec319e42c778618fa15cfe9af7f4a3d641b6c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1199, hash: '30d5d75061f048cb1cd0706d8122add48bd9e27cce6c480dd014a1e1390368f4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 63268, hash: 'b11ecc25df2c4c19ee7957815cd5889463334e1c23b4a04e3fd85ba79a7f5ea1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4N57BBVX.css': {size: 412720, hash: 'OdVGEViuhOg', text: () => import('./assets-chunks/styles-4N57BBVX_css.mjs').then(m => m.default)}
  },
};
