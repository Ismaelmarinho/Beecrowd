var input = require("fs").readFileSync("stdin","utf-8");
var lines = input.split("\n");
console.log(lines)
var a = parseInt(lines[0])
var b = parseInt(lines[1])
var x = a * b
console.log("PROD =" + x)