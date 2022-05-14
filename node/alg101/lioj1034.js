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
  let asc_z = 'z'.charCodeAt()
  let result = ''
  for (let i = 0; i < lines[1].length; i++) {
    let asc_i = lines[1][i].charCodeAt() + n
    let c = String.fromCharCode(asc_i > asc_z ? asc_i - 26 : asc_i)
    result += c
  }
  console.log(result)
}

/*
solve([10, "xray"])
//*/
