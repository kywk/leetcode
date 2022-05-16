/*
https://oj.lidemy.com/problem/1050
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
  let n = Number(tmp[0])
  let m = Number(tmp[1])

  tmp = lines[1].split(' ')
  let nums = []
  for (let i = 0; i < Number(n); i++)
    nums.push(Number(tmp[i]))

  let i = 0, j = 0
  for (; i < n - 1; i++) {
    for (j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] === m)
        return console.log(i, j)
    }
  }
}

/*
solve(["5 3", "1 7 9 8 2"])
//*/
