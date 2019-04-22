const handler = require("./handler");

const router = (request, response) => {
  const url = request.url;
  const method = request.method;
  if (method === 'GET') {
  if (url === '/') {
    handler.handlerHome(response);
  } else if (url.includes('public')) {
    handler.handlerPublic(request, response);
  } else if (url.includes('/getsales')) {
    handler.handlerGetSales(request, response);
  } else if (url.includes('/getproducts')) {
    handler.handlerGetProducts(request, response);
  } else {
  return;
  }
  } else if (method === 'POST') {
  if (url.includes('/postsale')) {
    handler.handlerPostSale(request, response);
  } else if (url.includes('/postproduct')) {
    handler.handlerPostProduct(request, response);
  } else if (url.includes('/deleteproduct')) {
    handler.handlerDeleteProduct(request, response);
  } else if (url.includes('/deletesales')) {
    handler.handlerDeleteSales(request, response);
  } else if (url.includes('/poststocktake')) {
    handler.handlerPostStockTake(request, response);
  } else {
    return;
  }
}
};

module.exports = router;
