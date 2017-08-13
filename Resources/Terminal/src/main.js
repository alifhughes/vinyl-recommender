var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//var xhr = new XMLHttpRequest();

// print process.argv
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});
