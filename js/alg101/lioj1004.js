/*
https://oj.lidemy.com/problem/1004

Input
輸入第一行會是一個數字 M，1 &lt;= M &lt;= 501<=M<=50，代表一共有幾組比賽的結果

接著每一行會有三個用空白分隔的數字 A, B, K

A 代表 A 選擇的數字，B 代表 B 選擇的數字，兩者皆保證為正整數
要特別注意的是 A 與 B 可能是很大的數字，但保證長度為 512 個位數以內

K 只會有兩種情況：1 或是 -1，若是 1 代表數字大的獲勝，K 若是 -1 代表數字小的獲勝


Output
針對每一筆輸入，請輸出贏家是誰。
若是 A 贏請輸出 A，B 贏請輸出 B，平手則輸出 DRAW
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
  let m = lines[0].split(' ')
  for (let i = 1; i <= m; i++) {
    let x = lines[i].split(' ')
    let a = BigInt(x[0])
    let b = BigInt(x[1])
    let k = x[2]

    if (a == b)
      console.log("DRAW")
    else {
      if (k === "1")
        console.log(a > b ? "A" : "B")
      else
        console.log(a > b ? "B" : "A")
    }
  }
}
