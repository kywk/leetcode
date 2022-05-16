/*
https://oj.lidemy.com/problem/1014
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
  let n = Number(lines[0])
  let result = 0
  let digit = 0
  while (n > 0) {
    let x = n % 10
    result += x * (9 ** digit)
    digit++
    n = (n - x) / 10
  }
  console.log(result)
}

/*
solve(["33"])
solve(["100"])
//*/
