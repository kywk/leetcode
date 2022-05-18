/*
https://oj.lidemy.com/problem/1043
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
  console.log(endsWith(lines[0], lines[1]))
}

// LIOJ 1043：String endsWith
function endsWith(str, searchString) {
  for (let i = 0; i < searchString.length; i++) {
    if (str[str.length - 1 - i] !== searchString[searchString.length - 1 - i])
      return false
  }
  return true
}
