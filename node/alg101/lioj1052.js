/*
https://oj.lidemy.com/problem/1052
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
  let v = [], w = []
  for (let i = 1; i <= n; i++) {
    let tmp = lines[i].split(' ').map(Number)
    w.push(tmp[0])
    v.push(tmp[1])
  }

  let dp = Array(m + 1).fill(0)
  for (let i = 0; i < n; i++) {
    for (let j = m; j >= w[i]; j--) {
      dp[j] = Math.max(...[dp[j], dp[j - w[i]] + v[i]])
    }
  }

  console.log(dp[m])
}

/*
solve(["3 10", "9 100", "5 60", "2 70"])
//*/
