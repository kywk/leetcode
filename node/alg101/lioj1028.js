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

function digitsSum(num) {
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
  let sum = 0

  for (let i = 0; i < tmp.length; i++) {
    sum += digitsSum(tmp[i])
  }

  while (sum > 10) {
    sum = digitsSum(sum)
  }
  console.log(sum)
}

/*
solve(["1991 11 7"])  // 2
//*/
