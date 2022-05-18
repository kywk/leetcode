/*
https://oj.lidemy.com/problem/1032
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

function calcDistance (x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
}

function solve(lines) {
  let n = Number(lines[0])
  for (let i = 0; i < n; i++) {
    let j = i * 4 + 1
    let d = calcDistance(Number(lines[j]), Number(lines[j + 1]),
                         Number(lines[j + 2]), Number(lines[j + 3]))
    console.log((Math.round((d * 100).toPrecision(15)) / 100).toFixed(2))
  }
}

/*
solve([2, 0, 0, 0, 3, 3, 3, 4, 4])
//*/
