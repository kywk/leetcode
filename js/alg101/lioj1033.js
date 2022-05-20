/*
https://oj.lidemy.com/problem/1033
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
  let pts = []
  for (let i = 1; i <= n; i++) {
    let tmp = lines[i].split(' ')
    let x = Number(tmp[0])
    let y = Number(tmp[1])
    pts.push([x, y])
  }

  let p1 = 1, p2 = 2, d = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < pts.length - 1; i++) {
    for (let j = i + 1; j < pts.length; j++) {
      let d1 = calcDistance(pts[i][0], pts[i][1], pts[j][0], pts[j][1])
      if (d1 < d) {
        p1 = i
        p2 = j
        d = d1
      }
    }
  }

  if (pts[p1][0] === pts[p2][0]) {
    if (pts[p1][1] < pts[p2][1]) {
      console.log(pts[p1][0], pts[p1][1])
      console.log(pts[p2][0], pts[p2][1])
    } else {
      console.log(pts[p2][0], pts[p2][1])
      console.log(pts[p1][0], pts[p1][1])
    }
  } else {
    if (pts[p1][0] < pts[p2][0]) {
      console.log(pts[p1][0], pts[p1][1])
      console.log(pts[p2][0], pts[p2][1])
    } else {
      console.log(pts[p2][0], pts[p2][1])
      console.log(pts[p1][0], pts[p1][1])
    }
  }
}

/*
solve([4, "2 3", "1 3", "1 2", "1 1"])
//*/
