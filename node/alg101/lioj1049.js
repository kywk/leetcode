/*
https://oj.lidemy.com/problem/1049
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
  let [n, m] = lines[0].split(' ')
  let strX = lines[1].split(' ')
  let strY = lines[2].split(' ')
  let numX = []
  let numY = []

  for (let i = 0; i < Number(n); i++)
    numX.push(Number(strX[i]))
  for (let i = 0; i < Number(m); i++)
    numY.push(Number(strY[i]))

  let x = 0, y = 0
  let d = Math.abs(numX[x] - numY[y])
  while ((x < numX.length - 1) && (y < numY.length - 1)) {
    if (numX[x + 1] < numY[y + 1])
      x++
    else
      y++

    d1 = Math.abs(numX[x] - numY[y])
    if (d1 < d)
      d = d1
  }

  if (x < numX.length - 1) {
    d1 = Math.abs(numX[x + 1] - numY[y])
    if (d1 < d)
      d = d1
  } else if (y < numY.length - 1) {
    d1 = Math.abs(numX[x] - numY[y + 1])
    if (d1 < d)
      d = d1
  }
  console.log(d)
}

/*
solve(["5 5", "1", "3 6 10 11 12"])
//*/
