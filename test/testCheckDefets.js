var seo = require("../lib/checkdefets.js");
var rules = seo.rules.rules;
var fs = require('fs');

var inputStream = fs.createReadStream('test.html');
var outputStream = fs.createWriteStream('test.output', { encoding: 'utf8'});

// test rule1 and output to console
console.log('test1');
seo.checkDefets(inputStream, '', rules[0]);

// test all rules and output to "test.output"
console.log('test2');
seo.checkDefets(inputStream, outputStream, rules);

// test all rules and output to console
console.log('test3');
seo.checkDefets('<a rel="ooo">', '', rules);
