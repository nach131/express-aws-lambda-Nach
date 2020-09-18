// const proxy = require('http-proxy-middleware');

// module.exports = function(app) {
//     app.use(proxy(
//         "/tokemo", {
//           target: "https://rt47smc2vg.execute-api.us-east-1.amazonaws.com/dev",
//           changeOrigin: true
//     }));
// }

const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/tokemo',
    createProxyMiddleware({
      target: 'https://rt47smc2vg.execute-api.us-east-1.amazonaws.com/dev',
      changeOrigin: true,
    })
  );
};