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

function solve1(lines) {
  let [n, target] = lines[0].split(' ').map(Number)
  let nums = lines[1].split(' ').map(Number)
  let idx = []

  let i = 0, j = 0
  for (; i < n - 1; i++) {
    for (j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] === target)
        return console.log(i, j)
    }
  }
}

function solve2(lines) {
  let [n, target] = lines[0].split(' ').map(Number)
  let nums = lines[1].split(' ').map(Number)
  let idx = []

  for (let i = 0; i < nums.length; i++) {
    idx[nums[i]] = i
  }

  for (let i = 0; i < nums.length; i++) {
    let findIdx = target - nums[i]
    if (typeof idx[findIdx] === 'undefined')
      continue
    if (nums[i] + nums[idx[findIdx]] === target)
      return console.log(i, idx[findIdx])
  }
}

function solve(lines) {
  //return solve1(lines) // 920ms. 32MB
  return solve2(lines) // 60ms, 34MB
}

/*
solve(["5 3", "1 7 9 8 2"])
//*/
