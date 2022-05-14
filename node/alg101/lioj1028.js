/*
https://oj.lidemy.com/problem/1028
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

function sumDigits(num) {
  let sum = 0
  while (num > 0) {
    let d = num % 10
    sum += d
    num = (num - d) / 10
  }
  return sum
}

function solve(lines) {
  let tmp = lines[0].split(' ')
  let num = Number(tmp[0] + tmp[1] + tmp[2])
  while (num > 10) {
    num = sumDigits(num)
  }
  console.log(num)
}

//*
solve(["1991 11 7"])  // 2
//*/
