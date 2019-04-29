const bcrypt = require("bcryptjs");

const hashPwd = (myPlaintextPassword, cb) => {
  console.log("plain text password", myPlaintextPassword);
bcrypt.genSalt(10, function(err, salt) {
if (err) {
  cb(err);
} else {
  console.log("this is the salt", salt);
  bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
    console.log("this is the hashed password", hash);
    cb(null, hash);
  });
}
});
};

module.exports = hashPwd;
