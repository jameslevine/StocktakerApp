const dbConnection = require("../databases/db_connection.js");

const getProducts = cb => {
  dbConnection.query("SELECT * FROM products;", (err, res) => {
    if (err) {
      return cb(err);
    }
    cb(null, res.rows);
    // console.log("Res.rows: ", res.rows);
  });
};

module.exports = getProducts;
