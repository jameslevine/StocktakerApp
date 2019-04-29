const jwt = require("jsonwebtoken");

require("env2")("./config.env");

const secret = process.env.SECRET;

var generateToken = obj => {
  console.log("this is jwt object", obj);
  return new Promise((resolve, reject) => {
    jwt.sign(obj, secret, (err, token) => {
      if (err) reject(err);
      console.log("this is jwt token", token);
      resolve(token);
    });
  });
};

module.exports = generateToken;
