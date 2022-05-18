/*
https://oj.lidemy.com/problem/1030
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

function isRecText (str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i])
      return false
  }
  return true
}

function solve(lines) {
  if (isRecText(lines[0]))
    console.log("True")
  else
    console.log("False")
}
