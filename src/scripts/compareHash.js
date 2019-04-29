const getUser = require("./../queries/getUser");
const bcrypt = require("bcryptjs");

const compareHash = (password, hashedPassword, cb) => {
  console.log("this is the password", password);
  console.log("this is the hasehd password", hashedPassword);
  console.log("this is compareHash function");
  bcrypt.compare(password, hashedPassword, (error, response) => {
  if (error) return(error);
  console.log("this is the bcrypt response", response);
  cb(null, response);
  });
  // console.log("this is the user database response", res);
};

module.exports = compareHash;
