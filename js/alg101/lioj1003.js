/*
https://oj.lidemy.com/problem/1003
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
  let str = ''
  for (let i = 1; i <= n; i++)
    str += lines[i]

  let m = Number(lines[n + 1])
  let result = ''
  for (let i = n + 2; i < n + m + 2; i++)
    result += str[Number(lines[i]) - 1]

  console.log(result)
}

/*
solve([2, "yo", "man", 3, 4, 2, 1])
//*/
