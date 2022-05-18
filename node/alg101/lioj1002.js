/*
LIOJ1002: 數字比大小
Description
輸入一共有許多行，每一行都包含兩個正整數 a, b
請輸出這兩個之中比較大的那個數字
若是碰到 a=b=0 代表輸入結束

Input
用空格隔開的兩正整數 a 與 b
0<=a,b<=2^31−1

Output
針對每一筆測試資料，請輸出比較大的那個數字，若是兩個一樣大則輸出任意一個數字皆可
若是碰到 a=b=0 代表輸入結束，請勿做任何處理
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
  for (var i = 0; i < lines.length; i++)
  {
    var tmp = lines[i].split(' ')
    a = Number(tmp[0])
    b = Number(tmp[1])
    if ((a == 0) && (b == 0))
      break

    if (a > b)
      console.log(a)
    else
      console.log(b)
  }
}
