#!/usr/bin/env node

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

// print process.argv
process.argv.slice(2).forEach(function (val, index, array) {
      console.log(index + ': ' + val);
});
