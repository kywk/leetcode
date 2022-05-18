/*
https://oj.lidemy.com/problem/1015

Input
一個正整數 t（1<=t<=10^5）

Output
請輸出音速小子用 t 秒的時間可以跑多遠
(音速就是聲音傳播的速度，在空氣中約為每秒 340 公尺)
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
  var t = Number(lines[0].split(' ')[0])
  console.log(t * 340)
}
