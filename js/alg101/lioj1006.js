/*
https://oj.lidemy.com/problem/1006
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
  let n = Number(lines[0])
  let seat = []
  for (let i = 0; i < n; i++)
    seat.push(0)
  for (let i = 2; i < 2 + Number(lines[1]); i++)
    seat[Number(lines[i]) - 1] = -1
  seat[n] = -1
  seat[n + 1] = -1

  let ok = 0
  for (let i = 0; i < n; i += 2) {
    if ((seat[i] === 0) && (seat[i + 1] === 0))
      ok++
    if ((seat[i] === 0) && (seat[i + 2] === 0))
      ok++
    if ((seat[i + 1] === 0) && (seat[i + 3] === 0))
      ok++
  }
  console.log(ok)
}

/*
solve([8, 2, 4, 5])
//*/
