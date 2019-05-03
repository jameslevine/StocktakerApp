const { Pool } = require("pg");

const url = require("url");
require("env2")("./config.env");

let DB_URL = process.env.DATABASE_URL || process.env.DB_URL || postgres://zwalumsfrveuma:59c09969867ca12ab302dfc2c22ea6b8c8ce2171bb9482c89f7d32fe653016d3@ec2-54-227-245-146.compute-1.amazonaws.com:5432/d53tagt7rlu2p;

// if (process.env.NODE_ENV === "test") {
//   DATABASE_URL = process.env.TEST_DB_URL;
// }

if (!DB_URL) throw new Error("Enviroment variable DB_URL must be set");

const params = url.parse(DB_URL);
const [username, password] = params.auth.split(":");

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split("/")[1],
  max: process.env.DB_MAX_CONNECTIONS || 2,
  user: username,
  password: password
};

options.ssl = options.host !== "localhost";
console.log("running");
module.exports = new Pool(options);
