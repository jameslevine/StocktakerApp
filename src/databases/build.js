const runDbBuild = require("./db_build");

runDbBuild((err, res) => {
  if (err) return process.stdout.write("build failed");
  process.stdout.write("build success");
});
