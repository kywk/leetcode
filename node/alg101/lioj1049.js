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
  let numX = lines[1].split(' ').map(Number)
  let numY = lines[2].split(' ').map(Number)

  let x = 0, y = 0
  let min = Math.abs(numX[x] - numY[y])
  while ((x < numX.length - 1) && (y < numY.length - 1)) {
    if (numX[x + 1] < numY[y + 1])
      x++
    else
      y++

    let d = Math.abs(numX[x] - numY[y])
    if (d < min)
      min = d
  }

  if (x < numX.length - 1) {
    let d = Math.abs(numX[x + 1] - numY[y])
    if (d < min)
      min = d
  } else if (y < numY.length - 1) {
    let d = Math.abs(numX[x] - numY[y + 1])
    if (d < min)
      min = d
  }
  console.log(min)
}

//*
solve(["5 5", "1 4 6 12 15 ", "3 6 10 11 12"])
//*/
