const dbConnection = require("../databases/db_connection.js");

const postProducts = (obj, cb) => {
  console.log(obj);
  dbConnection.query(
    "INSERT INTO products (product_name, ean_isbn, product_code, inventory) VALUES ($1, $2, $3, $4)",
    [
      obj.product_name,
      obj.ean_isbn,
      obj.product_code,
      obj.inventory,
    ],
    (err, res) => {
      if (err) {
        return cb(err);
      }
      cb(null);
    }
  );
};

module.exports = postProducts;
