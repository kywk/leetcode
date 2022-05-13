/*
https://oj.lidemy.com/problem/1022
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
  let nums = Number(lines[0])
  let star = '*'
  for (let i = 0; i < nums; i++) {
    let space = ''
    for (let j = nums - 1; j > i; j--) {
      space += ' '
    }
    console.log(space + star)
    star += '**'
  }
}
