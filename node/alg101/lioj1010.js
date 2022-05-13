/*
https://oj.lidemy.com/problem/1010

Input
輸入為兩個用空格分隔的正整數 A 與 B 1<=A,B<=2^31−1

Output
若是兩人為靈魂伴侶 (如果兩個人的分數一樣，就代表他們一定是靈魂伴侶)，請輸出 Yes，否之則輸出 No
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
  if (Number(tmp[0]) == Number(tmp[1]))
    console.log("Yes")
  else
    console.log("No")
}
