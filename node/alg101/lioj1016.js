/*
https://oj.lidemy.com/problem/1016
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
  let a = [], b = []
  for (let i = 1; i <= n; i++) {
    if (lines[i] === 'A')
      a.push(i)
    else
      b.push(i)
  }

  if ((a.length === b.length) ||
      (a.length === 0) ||
      (b.length === 0))
    return console.log("PEACE")

  if (a.length > b.length) {
    for (let i = 0; i < b.length; i++) {
      console.log(b[i])
    }
  } else {
    for (let i = 0; i < a.length; i++) {
      console.log(a[i])
    }
  }
}

/*
solve(["6", "A", "B", "B", "A", "B", "A"])
//*/
