/*
https://oj.lidemy.com/problem/1018
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
  let nums = lines[1].split(' ').map(Number)
  let big = 0, count = 1
  nums[nums.length] = Infinity

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1])
      count++
    else {
      if (count > big)
        big = count
      count = 1
    }
  }
  console.log(big)
}

/*
solve(["10", "1 1 2 2 2 3 3 3 4 4 4 4 4"])
//*/
