const dbConnection = require("../databases/db_connection.js");

const getSales = cb => {
  dbConnection.query("SELECT * FROM sales;", (err, res) => {
    if (err) {
      return cb(err);
    }
    cb(null, res.rows);
    // console.log("Res.rows: ", res.rows);
  });
};

module.exports = getSales;
