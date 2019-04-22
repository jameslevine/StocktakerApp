const dbConnection = require("../databases/db_connection.js");

const postSales = (obj, cb) => {
  let today = new Date();
  dbConnection.query(
    "INSERT INTO sales (product_name, sale_location, units_sold, sale_price, date_stamp, time_stamp) VALUES ($1, $2, $3, $4, $5, $6)",
    [
      obj.product_name,
      obj.sale_location,
      obj.units_sold,
      obj.sale_price,
      today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear(),
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    ],
    (err, res) => {
      if (err) {
        return cb(err);
      }
      cb(null);
    }
  );
};

module.exports = postSales;
