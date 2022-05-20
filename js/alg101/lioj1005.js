/*
https://oj.lidemy.com/problem/1005
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

function sumFactor(n) {
  let result = []
  let tmp = []
  let m = Math.floor(Math.sqrt(n))
  let sum = 0
  for (let i = 2; i < m; i++) {
    if (n % i == 0) {
      sum += i
      sum += n / i
    }
  }

  return sum + 1
}

function solve(lines) {
  let i = 0
  while (lines[i] !== '0') {
    let n = Number(lines[i])
    let x = sumFactor(n)
    let y = sumFactor(x)
    if (n === y)
      console.log(x)
    else
      console.log('QQ')
    i++
  }
}

/*
solve(["220", "221", "222", "223", "0"])
//*/
