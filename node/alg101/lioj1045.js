/*
https://oj.lidemy.com/problem/1000
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
  console.log(slice(lines[0], Number(lines[1]), Number(lines[2])))
}

// LIOJ 1045：String slice
function slice(str, beginIndex, endIndex) {
  let result = ''
  for (let i = beginIndex; i < endIndex; i++) {
    result += str[i]
  }
  return result
}
