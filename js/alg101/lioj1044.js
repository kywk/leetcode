/*
https://oj.lidemy.com/problem/1044
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
  console.log(padEnd(lines[0], Number(lines[1]), lines[2]))
}

// LIOJ 1044：String padEnd
function padEnd(str, targetLength, padString) {
  if (str.length >= targetLength)
    return str

  let d = targetLength - str.length
  let loopTimes = Math.floor(d / padString.length)
  let remines = d % padString.length
  for (let i = 0; i < loopTimes; i++) {
    str += padString
  }
  for (let i = 0; i < remines; i++) {
    str += padString[i]
  }
  return str
}

/*
solve(["abcaa", 10, "xyz"])
//*/
