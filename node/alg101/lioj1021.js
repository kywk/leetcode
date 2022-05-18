/*
https://oj.lidemy.com/problem/1021
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
  let nums = Number(lines[0])
  let s = ''
  for (let i = 0; i < nums; i++) {
    s += '*'
    console.log(s)
  }
}

solve([5])
