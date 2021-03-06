const dbConnection = require("../databases/db_connection.js");

const getUser = (username, cb) => {
  console.log("get username", username);
  dbConnection.query("SELECT * FROM users WHERE username = $1;", [username], (error, responsetwo) => {
    if (error) {
      return cb(error, "username cannot be found");
    }
    if (responsetwo.rows === []) {
      cb(null, "username and password don't match anything");
    }
    console.log("get username", responsetwo);
    cb(null, responsetwo.rows);
  });
};

module.exports = getUser;
