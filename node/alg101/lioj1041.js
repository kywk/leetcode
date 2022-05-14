/*
https://oj.lidemy.com/problem/1041
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
  console.log(trim(lines[0]))
}

// LIOJ 1041：String trim
function trim(str) {
  let start = 0
  let end = str.length - 1
  let result = ''
  for (; start < str.length; start++) {
    if (str[start] !== ' ')
      break
  }
  for (; end >= 0; end--) {
    if (str[end] !== ' ')
      break
  }
  for (let i = start; i <= end; i++) {
    result += str[i]
  }
  return result
}


/*
solve(["      a b c"])
//*/
