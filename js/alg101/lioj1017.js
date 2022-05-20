/*
https://oj.lidemy.com/problem/1017

Input
第一行為一個數字 C，0<=C<=1000，代表小偷最多能夠帶走幾樣物品
第二行為一個數字 N，1<=N<=1000，代表一共有幾項物品
接下來 N 行每一行都包含一個數字 1<=Pi<=100000，代表第 i 項物品的價值

Output
請你輸出小偷最多能偷到多少價值的東西
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

function add(accumulator, a) {
  return accumulator + a;
}

function solve(lines) {
  let c = Number(lines[0])
  let n = Number(lines[1])
  let value = []
  for (let i = 2; i < n + 2; i++) {
    value.push(Number(lines[i]))
  }
  if (n < c) {
    console.log(value.reduce(add, 0))
  } else {
    value.sort(function(a, b) {
      return b - a
    })

    value.splice(c)
    console.log(value.reduce(add, 0))
  }
}
