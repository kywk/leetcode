/*
LIOJ1001: A+B

Description
每一個 Online Judge 都會有的基本題目，讓你熟悉 OJ 的使用方式。
給定兩個正整數 a 與 b，輸出 a + b 的結果。

Input
0 <= a, b <= 2^30

Output
兩數相加後的結果
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
  var tmp = lines[0].split(' ')
  console.log(Number(tmp[0]) + Number(tmp[1]))
}
