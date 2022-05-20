/*
https://oj.lidemy.com/problem/1007
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
  let result = []
  let maxScore = -Infinity
  for (let i = 1; i <= n; i++) {
    let [name, score] = lines[i].split(' ')
    let s = Number(score)
    if (s > maxScore) {
      result = [name]
      maxScore = s
    } else if (s === maxScore)
      result.push(name)
  }

  for (let i = 0; i < result.length; i++)
    console.log(result[i])
}

/*
solve([3, "Nick 8", "Peter 5", "Nic 100"])
console.log("---")
solve([3, "Nick 90", "Peter 90", "Bob 80"])
//*/
