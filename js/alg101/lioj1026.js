/*
https://oj.lidemy.com/problem/1026

Input
輸入的第一行為一個數字 N，2<=N<=100，代表數列裡總共有幾個數字
接下來第二行為數列中的數字 −10000<=Ai<=10000，彼此用空格分隔

Output
若是輸入的數列為等比數列，請輸出 Yes，反之輸出 No
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

function isGeometric(seq) {
  if (seq.length <= 1) return true

  let m = seq[1] / seq[0]
  for (let i = 2; i < seq.length; i++) {
    if ((seq[i] / seq[i - 1]) !== m)
      return false
  }
  return true
}

function solve(lines) {
  let n = Number(lines[0])
  let tmp = lines[1].split(' ')

  let seq = []
  for (let i = 0; i < n; i++) {
    seq.push(Number(tmp[i]))
  }

  console.log(isGeometric(seq) ? "Yes" : "No")
}
