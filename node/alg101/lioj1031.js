/*
https://oj.lidemy.com/problem/1031
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
  let n = Math.floor(Math.sqrt(Number(lines[0])))
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += i**2
  }
  console.log(sum)
}

/*
solve(["50"])
//*/
