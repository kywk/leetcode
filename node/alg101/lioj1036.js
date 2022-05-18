/*
https://oj.lidemy.com/problem/1036
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
  let src = []
  for (let i = 1; i < n + 1; i++) {
    src.push(lines[i])
  }
  let result = reverse(src)
  for (let i = 0; i < result.length; i++) {
    console.log(result[i])
  }
}

// LIOJ 1036：Array reverse
function reverse(arr) {
  let result = []
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i])
  }
  return result
}

/*
solve([3, 1, 2, 3])
//*/
