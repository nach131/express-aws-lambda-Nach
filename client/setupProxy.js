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
    '/articles',
    createProxyMiddleware({
      target: 'https://vhaeq8i93e.execute-api.eu-west-3.amazonaws.com/production',
      changeOrigin: true,
    })
  );
};