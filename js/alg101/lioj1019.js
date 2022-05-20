/*
https://oj.lidemy.com/problem/1019
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
  let [n, m] = lines[0].split(' ').map(Number)

  // Create Map
  let map = []
  let up = []
  for (let i = 0; i <= n; i++)
    up.push(0)
  map.push(up)
  for (let i = 1; i <= m; i++) {
    let row = [0]
    for (let j = 0; j < n; j++) {
      if (lines[i][j] === '.')
        row.push(1)
      else
        row.push(0)
    }
    map.push(row)
  }
  let bottom = []
  for (let i = 0; i <= n; i++)
    bottom.push(0)
  map.push(bottom)

  // Walking
  let x = 1, y = 1, count = 0
  while ((x !== n) || (y !== m)) {
    map[y][x] = -1
    if (map[y][x + 1] === 1)
      x = x + 1
    else if (map[y + 1][x] === 1)
      y = y + 1
    else if (map[y][x - 1] === 1)
      x = x - 1
    else if (map[y - 1][x] === 1)
      y = y - 1
    else
      return false
    count++
  }

  console.log(count)
}

/*
solve(["6 5", ".#####", ".#####", ".#####" ,".#####", "......"])
//*/
