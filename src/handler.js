const fs = require("fs");
const querystring = require("query-string");
const path = require("path");
const getSales = require("./queries/getSales");
const getProducts = require("./queries/getProducts");
const postProducts = require("./queries/postProducts");
const postSales = require("./queries/postSales");
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
  // console.log("this is the handlerPublic");
  const url = req.url;
  // console.log("this is the url", url);
  const extension = path.extname(url);
  // console.log("this is the extension", extension);
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
  // console.log('this is handlerPostSale');
  let data = "";
    req.on("data", chunk => {
      data += chunk;
      console.log(data);
    });
    req.on("end", () => {
      console.log('this is the data', data)
      const result = querystring.parse(data);
      console.log('this is the parsed data', result);
      res.writeHead(302, { Location: "/" });
      res.end();
});
};

const handlerPostProduct = (req, res) => {
  // console.log('this is handlerPostProduct');
  let data = "";
    req.on("data", chunk => {
      data += chunk;
      console.log(data);
    });
    req.on("end", () => {
      console.log('this is the data', data)
      const result = querystring.parse(data);
      console.log('this is the parsed data', result);
      // postData.checkIn(name, colour, gender, (err, res) => {
        // if (err) console.log(err);
        // res.writeHead(302, { Location: "/" });
        // res.end();
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
  handlerPostProduct
}
