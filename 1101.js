const input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split("\n");
lines.map(line => {
  let [a, b] = line.split(" ").map(item => Number(item));

  if (a > 0 && b > 0) {
    let maior = a > b ? a : b;
    let menor = a < b ? a : b;
    let soma = 0;

    let o = "";

    for (let i = menor; i <= maior; i++) {
      o += `${i} `
      soma = soma + i;
    }

    o += `Sum=${soma}`

    console.log(o);
  }
});