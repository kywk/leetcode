/*
https://oj.lidemy.com/problem/1038
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
  let searchElement = Number(lines[0])
  let n = Number(lines[1])
  let src = []
  for (let i = 2; i < n + 2; i++) {
    src.push(Number(lines[i]))
  }
  console.log(indexOf(src, searchElement))
}

// LIOJ 1038：Array indexOf
function indexOf(arr, searchElement) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchElement)
      return i
  }
  return -1
}
