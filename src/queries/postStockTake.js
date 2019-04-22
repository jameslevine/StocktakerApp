const dbConnection = require("../databases/db_connection.js");

const postStockTake = (obj1, obj2, cb) => {
  console.log("this is the new stocktake inventory count", obj2);
  console.log("this is the product id", obj1);
  dbConnection.query(
    "UPDATE products SET inventory=$1 WHERE id=$2",
    [ obj2, obj1 ],
    (err, res) => {
      if (err) {
        return cb(err);
      }
      cb(null);
    }
  );
};

module.exports = postStockTake;
