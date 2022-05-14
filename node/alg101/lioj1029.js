/*
https://oj.lidemy.com/problem/1029
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
  let tmp = lines[0].split(' ')
  let x = Number(tmp[0])
  let y = Number(tmp[2])

  switch (tmp[1]) {
    case '+':
      return console.log(x + y)
    case '-':
      return console.log(x - y)
    case '*':
      return console.log(x * y)
    case '/':
      return console.log(x / y)
  }
}

/*
solve(["3 * 4"])  // 12
//*/
