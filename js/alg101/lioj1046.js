/*
https://oj.lidemy.com/problem/1046
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

function check(sur) {
  if ((sur[0][0] === sur[1][1]) && (sur[1][1] === sur[2][2]))
    return sur[0][0]
  if ((sur[2][0] === sur[1][1]) && (sur[1][1] === sur[0][2]))
    return sur[2][0]

  if ((sur[0][0] === sur[0][1]) && (sur[0][1] === sur[0][2]))
    return sur[0][0]
  if ((sur[1][0] === sur[1][1]) && (sur[1][1] === sur[1][2]))
    return sur[1][0]
  if ((sur[2][0] === sur[2][1]) && (sur[2][1] === sur[2][2]))
    return sur[2][0]

  if ((sur[0][0] === sur[1][0]) && (sur[1][0] === sur[2][0]))
    return sur[0][0]
  if ((sur[0][1] === sur[1][1]) && (sur[1][1] === sur[2][1]))
    return sur[0][1]
  if ((sur[0][2] === sur[1][2]) && (sur[1][2] === sur[2][2]))
    return sur[0][2]

  return "DRAW"
}

function solve(lines) {
  let ooxx = []
  for (let i = 0; i < 3; i++) {
    let row = []
    for (let j = 0; j < 3; j++) {
      row.push(lines[i][j])
    }
    ooxx.push(row)
  }
  console.log(check(ooxx))
}

/*
solve(["OOX", "XXO", "XXO"])
solve(["XXO", "OXX", "XOO"])
//*/
