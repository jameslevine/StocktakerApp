const fs = require("fs");
const querystring = require("query-string");
const path = require("path");
const getSales = require("./queries/getSales");
const getProducts = require("./queries/getProducts");
const postProducts = require("./queries/postProducts");
const postSales = require("./queries/postSales");
const postStockTake = require("./queries/postStockTake");
const deleteProduct = require("./queries/deleteProduct");
const deleteSales = require("./queries/deleteSales");
const urlMod = require("url");

const handlerHome = (res) => {
  fs.readFile(path.join(__dirname, "../public/index.html"), (err, file) => {
    if (err) {
      console.log(err);
      return err;
    }
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    res.end(file);
  });
};

const handlerPublic = (req, res) => {
  const url = req.url;
  const extension = path.extname(url);
  const extensionType = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".ico": "image/vnd.microsoft.icon"
  };
  const filePath = path.join(__dirname, "..", url);
  console.log('this is the filepath', filePath);
  fs.readFile(filePath, (err, file) => {
    if (err) {
      console.log(err);
      return;
    };
    res.writeHead(200, { "Content-Type": extensionType[extension] });
    res.end(file);
  });
};

const handlerGetSales = (req, res) => {
  console.log('this is handlerGetSales');
  getSales((error, response) => {
    if (error) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("no sales found");
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(response));
  });
}

const handlerGetProducts = (req, res) => {
  console.log('this is handlerGetProducts');
  getProducts((error, response) => {
    if (error) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("no products found");
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(response));
  });
}

const handlerPostSale = (req, res) => {
  let data = "";
    req.on("data", chunk => {
      data += chunk;
    });
    req.on("end", () => {
      const result = querystring.parse(data);
      console.log('this is the result', result);
      postSales(result, err => {
        if (err) console.log(err);
        res.writeHead(302, { Location: "/" });
        res.end();
      });
      res.writeHead(302, { Location: "/" });
      res.end();
});
};

const handlerPostProduct = (req, res) => {
  let data = "";
    req.on("data", chunk => {
      data += chunk;
    });
    req.on("end", () => {
      const result = querystring.parse(data);
      console.log('this is the product post', result);
      postProducts(result, err => {
        if (err) console.log(err);
        res.writeHead(302, { Location: "/" });
        res.end();
      });
      res.writeHead(302, { Location: "/" });
      res.end();
    });
};

const handlerDeleteProduct = (req, res) => {
  const deleteId = req.url.split("=")[1];
  deleteProduct(deleteId, err => {
    if (err) console.log(err);
    res.writeHead(302, { Location: "/" });
    res.end();
  });
  res.writeHead(302, { Location: "/" });
  res.end();
};

const handlerDeleteSales = (req, res) => {
  const deleteId = req.url.split("=")[1];
  deleteSales(deleteId, err => {
    if (err) console.log(err);
    res.writeHead(302, { Location: "/" });
    res.end();
  });
  res.writeHead(302, { Location: "/" });
  res.end();
};

const handlerPostStockTake = (req, res) => {
  let data = "";
    req.on("data", chunk => {
      data += chunk;
    });
    req.on("end", () => {
      const result = querystring.parse(data);
      console.log('this is the inventory stocktake', result);
      console.log('key', Object.keys(result)[0]);
      console.log('value', Object.values(result)[0]);
      console.log('key length', Object.keys(result).length);
      console.log('value length', Object.values(result).length);
      // result.map(obj => {
      //   console.log(obj);
      // });
      for (let i=0; i<(Object.values(result).length)-1; i++) {
      const newInventoryValue = Object.values(result)[i];
      console.log(newInventoryValue.length);
      const productId = Object.keys(result)[i];
      if (newInventoryValue.length !== 0) {
      postStockTake(productId, newInventoryValue, err => {
        if (err) console.log(err);
        res.writeHead(302, { Location: "/" });
        res.end();
      });
    };
    };
      // postStockTake(result, err => {
      //   if (err) console.log(err);
      //   res.writeHead(302, { Location: "/" });
      //   res.end();
      // });
      res.writeHead(302, { Location: "/" });
      res.end();
    });
}

module.exports = {
  handlerHome,
  handlerPublic,
  handlerGetSales,
  handlerGetProducts,
  handlerPostSale,
  handlerPostProduct,
  handlerPostStockTake,
  handlerDeleteProduct,
  handlerDeleteSales
}
