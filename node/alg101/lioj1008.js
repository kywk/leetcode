/*
https://oj.lidemy.com/problem/1008

Description

取水的水桶。王國裡的工匠都是「2 的愛好者」，對於 2 這個數字有莫名的狂熱。
因此，每個水桶的容量都是 2 的 n 次方：
1, 2, 4, 8, 16, 32, 64, 128...，而最大的水桶容量為 2147483648，

每一次取水都能帶最少的水桶去，而且「每一個水桶一定都要裝滿」，最少需要帶幾個水桶。


Input
輸入為一個數字 1<= M <=2^31 - 1

Output
請輸出若是要取 M 個單位的水，最少需要帶幾個水桶
 */

function max2power (x) {
  x |= x >>> 1
  x |= x >>> 2
  x |= x >>> 4
  x |= x >>> 8
  x |= x >>> 16
  x++
  x = x >>> 1
  return x
}

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
  let m = Number(lines[0].split(' ')[0])
  let count = 0

  while (m > 0) {
    count += m & 1
    m >>= 1
  }
  console.log(count)
}

/*
solve(["20"])
//*/
