/*
https://oj.lidemy.com/problem/1039
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
  let value = Number(lines[0])
  let n = Number(lines[1])
  let src = []
  for (let i = 2; i < n + 2; i++) {
    src.push(Number(lines[i]))
  }
  fill(src, value)
  for (let i = 0; i < src.length; i++) {
    console.log(src[i])
  }
}

// LIOJ 1039：Array fill
function fill(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = value
  }
}
