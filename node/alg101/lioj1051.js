/*
https://oj.lidemy.com/problem/1051
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
  let tmp = lines[1].split(' ')
  let nums = []
  let count = 0
  for (let i = 0; i < n; i++)
    nums.push(Number(tmp[i]))

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] > nums[j])
        count++
    }
  }
  console.log(count)
}

/*
solve(["5", "5 4 3 2 1"])
//*/
