const dbConnection = require("../databases/db_connection.js");

const postUser = (hashedpass, obj, cb) => {
  console.log("this is the hashed password in postUser", hashedpass);
  console.log("this is the object in postUser", obj);
  dbConnection.query(
    "INSERT INTO users (first_name, last_name, username, password) VALUES ($1, $2, $3, $4)",
    [
      obj.firstname,
      obj.lastname,
      obj.username,
      hashedpass
    ],
    (err, res) => {
      if (err) {
        console.log("User post failed", err);
        return cb(err);
      }
      console.log("User posted successfully to users table in database");
      cb(null);
    }
  );
};

module.exports = postUser;
