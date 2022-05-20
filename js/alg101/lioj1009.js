/*
https://oj.lidemy.com/problem/1009
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

function strReverse(str) {
  let result = ''
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  return result
}

function solve(lines) {
  console.log(strReverse(lines[0]))
}

/*
solve(["abcde"])
//*/
