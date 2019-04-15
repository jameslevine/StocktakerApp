const tape = require("tape");
const tapSpec = require("tap-spec");

tape("tape working", t => {
  t.pass("working");
  t.end();
});

tapSpec("tap-spec working", t => {
  t.pass("working");
  t.end();
});
