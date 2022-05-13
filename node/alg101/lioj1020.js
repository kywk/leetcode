/*
https://oj.lidemy.com/problem/1020

Description

質數的定義為：在大於 1 的自然數中，除了 1 和該數自身以外，無法被其他自然數整除的數。
換句話說，如果一個大於 1 的正整數的因數除了 1 和自己以外就沒有其他的了，那就是質數，以下是前 10 個數字的因數：

1: 1
2: 1, 2
3: 1, 3
4: 1, 2, 4
5: 1, 5
6: 1, 2, 3, 6
7: 1, 7
8: 1, 2, 4, 8
9: 1, 3, 9
10: 1, 2, 5, 10

根據因數可得知，1~10 的質數為：2, 3, 5, 7
現在給你一些數字，請輸出每一個數字是否為質數


Input
第一行為一個正整數 1<=N<=100，代表一共有幾個數字
接下來 N 行每一行都包含了一個正整數 1<=P<=100000

Output
針對每一筆輸入，如果 P 是質數，輸出：Prime，否之則輸出 Composite
（附註：Composite 是合數的意思，不過有一點要注意的是 1 不是質數也不是合數，但在這一題裡面一樣要輸出Composite）
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

function isPrime(n) {
  if (n == 1)
    return false
  else if (n <= 3)
    return true

  if ((n % 2 == 0) || (n % 3 == 0))
    return false

  let s = Math.floor(Math.sqrt(n))
  for (let i = 5; i <= s; i++) {
    if (n % i == 0)
      return false
  }
  return true
}

function solve(lines) {
  let nums = Number(lines[0])
  for (let i = 1; i <= nums; i++) {
    if (isPrime(Number(lines[i])))
      console.log("Prime")
    else
      console.log("Composite")
  }
}
