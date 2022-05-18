/*
https://oj.lidemy.com/problem/1053
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
  let [h, w] = lines[0].split(' ').map(Number)

  // create map
  let map = []
  let border = []
  for (let i = 0; i <= w; i++)
    border.push(-1)
  map.push(border)
  for (let i = 1; i <= h; i++) {
    let row = [-1]
    for (let j = 0; j < lines[i].length; j++) {
      if (lines[i][j] == '.')
        row.push(0)
      else
        row.push(-1)
    }
    row.push(-1)
    map.push(row)
  }
  map.push(border)

  // labyrinth
  let step = 0
  let from = [[1, 1]]

  if ((h === 1) && (w === 1))
    return 0

  map[1][1] = Infinity
  while (true) {
    let next = []
    step++
    for (let i = 0; i < from.length; i++) {
      let [y, x] = from[i]
      if (map[y][x + 1] === 0) {
        if ((y === h) && (x + 1 === w))
          return console.log(step)
        map[y][x + 1] = step
        next.push([y, x + 1])
      }
      if (map[y + 1][x] === 0) {
        if ((y + 1 === h) && (x === w))
          return console.log(step)
        map[y + 1][x] = step
        next.push([y + 1, x])
      }
      if (map[y][x - 1] === 0) {
        if ((y === h) && (x - 1 === w))
          return console.log(step)
        map[y][x - 1] = step
        next.push([y, x - 1])
      }
      if (map[y - 1][x] === 0) {
        if ((y - 1 === h) && (x === w))
          return console.log(step)
        map[y - 1][x] = step
        next.push([y - 1, x])
      }
    }

    if (next.length === 0)
      return console.log(0)
    from = next
  }
}

/*
solve(["3 3", ".#.", "...", "#.."]);
//*/
