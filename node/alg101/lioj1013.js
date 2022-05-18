/*
https://oj.lidemy.com/problem/1013
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

function fibonacciMap (n) {
  if (typeof fibonacciMap.fin === 'undefined') {
    fibonacciMap.fin = [0, 1]
  }

  if (fibonacciMap.fin.length <= n) {
    for (let i = fibonacciMap.fin.length; i <= n; i++) {
      fibonacciMap.fin[i] = fibonacciMap.fin[i - 1] + fibonacciMap.fin[i - 2]
    }
  }

  return fibonacciMap.fin[n]
}

function fibonacciRecursive (n) {
  if (n <= 1)
    return n
  if (n == 2)
    return 1

  if (n % 2 == 0) {
    let k = n / 2
    let f1 = fibonacci(k)
    let f2 = fibonacci(k - 1)
    return f1 * (2 * f2 + f1)
  } else {
    let k = (n + 1) / 2
    let f1 = fibonacci(k)
    let f2 = fibonacci(k - 1)
    return (f1 ** 2) + (f2 ** 2)
  }
}

function fibonacci (n) {
  if (n < 16) {
    return fibonacciMap(n)
  }
  return fibonacciRecursive(n)
}

function solve(lines) {
  console.log(fibonacci(Number(lines[0])))
}
