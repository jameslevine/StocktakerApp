const handler = require("./handler");

const router = (request, response) => {
  const url = request.url;
  const method = request.method;
  console.log(method);
  console.log(url);
  if (method === 'GET') {
  if (url === '/') {
    handler.handlerHome(response);
    console.log('homeroute');
  } else if (url.includes('public')) {
    console.log('publicroute');
    handler.handlerPublic(request, response);
  } else if (url.includes('/getsales')) {
    console.log('getsalesroute');
    handler.handlerGetSales(request, response);
  } else if (url.includes('/getproducts')) {
    console.log('getproductsroute');
    handler.handlerGetProducts(request, response);
  } else {
  return;
  }
  } else if (method === 'POST') {
  if (url.includes('/postsale')) {
    console.log('postsaleroute');
    handler.handlerPostSale(request, response);
  } else if (url.includes('/postproduct')) {
    console.log('postproductroute');
    handler.handlerPostProduct(request, response);
  } else {
    return;
  }
}
};

module.exports = router;
