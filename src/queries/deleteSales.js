const dbConnection = require("../databases/db_connection.js");

const deleteSales = (obj, cb) => {
  console.log("id to delete", obj);
  dbConnection.query("DELETE FROM sales WHERE id=$1", [obj],
    (err, res) => {
    if (err) {
      return cb(err);
    }
    cb(null);
  });
};

module.exports = deleteSales;
