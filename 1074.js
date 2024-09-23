const input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split("\n").map(item => parseInt(item));
const a = lines.shift();
for(let i = 0; i < a; i++) {  
  if(lines[i] % 2 === 0 && lines[i] > 0) console.log("EVEN POSITIVE");
  if(lines[i] % 2 === 0 && lines[i] < 0) console.log("EVEN NEGATIVE");
  if(lines[i] % 2 !== 0 && lines[i] > 0) console.log("ODD POSITIVE");
  if(lines[i] % 2 !== 0 && lines[i] < 0) console.log("ODD NEGATIVE");
  if(lines[i] === 0) console.log("NULL");
}