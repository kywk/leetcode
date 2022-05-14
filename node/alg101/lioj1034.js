/*
https://oj.lidemy.com/problem/11034
 */

var readline = require('readline');

var lines = []
var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  solve(lines)
})

function solve(lines) {
  let n = Number(lines[0]) % 26
  let ascA = 'a'.charCodeAt()
  let result = ''
  for (let i = 0; i < lines[1].length; i++) {
    let code = lines[1][i].charCodeAt() - ascA
    let newCode = ((code + n) % 26) + ascA
    let c = String.fromCharCode(newCode)
    result += c
  }
  console.log(result)
}

/*
solve([10, "xray"]) // hbki
//*/
