

// Test underscore library
const _ = require("underscore");
console.log(_.range(5));

//-------------------------------------------------------------------------------------------//
// Test mkdirp library
const mkdirp = require("mkdirp");
mkdirp("foo", function(err) {
  if (err) console.error(err);
  else console.log("Directory created!");
});

//-------------------------------------------------------------------------------------------//
