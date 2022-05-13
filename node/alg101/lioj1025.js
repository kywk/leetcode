/*
https://oj.lidemy.com/problem/1025
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

function isNarcissistic(n) {
  let x = n
  let digits = []

  while (x > 0) {
    let digit = x % 10
    digits.push(digit)
    x = (x - digit) / 10
  }

  let count = 0
  for (let i = 0; i < digits.length; i++) {
    count += Math.pow(digits[i], digits.length)
  }

  if (count == n)
    return true
  else
    return false
}

function solve(lines) {
  let tmp = lines[0].split(' ')
  let n = Number(tmp[0])
  let m = Number(tmp[1])
  for (let i = n; i <= m; i++) {
    if (isNarcissistic(i))
      console.log(i)
  }
}
