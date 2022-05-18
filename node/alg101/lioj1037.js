/*
https://oj.lidemy.com/problem/1037
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
  let target = Number(lines[0])
  let n = Number(lines[1])
  let src = []
  for (let i = 2; i < n + 2; i++) {
    src.push(Number(lines[i]))
  }
  let result = filter(src, word => word !== target)
  for (let i = 0; i < result.length; i++) {
    console.log(result[i])
  }
}

// LIOJ 1037：Array filter
// 這題 callback 會是一個 function，但難度會比較高
// 若是做不出來，也可以調整參數
function filter(arr, callback) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]))
      result.push(arr[i])
  }
  return result
}

/*
solve([3, 5, 1, 3, 3, 2, 8])
//*/
