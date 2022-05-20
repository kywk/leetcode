/*
https://oj.lidemy.com/problem/1027
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

function isValidCreditCard(credit_no) {
  let nums = []

  for (let i = 0; i < credit_no.length; i++) {
    if (credit_no[i] === '-')
      continue
    if (!(credit_no[i] >= '0') && (credit_no[i] <= '9'))
      return false
    nums.push(Number(credit_no[i]))
  }

  let sum = 0
  for (let i = 0; i < 16; i+=2) {
    let v = nums[i] * 2
    sum += v >= 10 ? v - 9 : v
  }
  for (let i = 1; i < 15; i+= 2) {
    sum += nums[i]
  }

  let check = (10 - (sum % 10)) % 10
  return check === nums[15]
}

function solve(lines) {
  if (!isValidCreditCard(lines[0]))
    return console.log("INVALID")

  console.log(lines[0][0] === '5' ? "MASTER_CARD" : "VISA")
}


/*
solve(["4957-9310-4702-1531"]) // VISA
solve(["5412-3456-7890-1232"]) // MASTER_CARD
//*/
