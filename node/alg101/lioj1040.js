/*
https://oj.lidemy.com/problem/1040
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
  let separator = lines[0]
  let n = Number(lines[1])
  let src = []
  for (let i = 2; i < n + 2; i++) {
    src.push(lines[i])
  }
  console.log(join(src, separator))
}

// LIOJ 1040：Array join
function join(arr, separator) {
  let result = ''
  for (let i = 0; i < arr.length - 1; i++) {
    result += arr[i] + separator
  }
  result += arr[arr.length - 1]
  return result
}

/*
solve([",", 3, 1, 2, 3])
//*/

