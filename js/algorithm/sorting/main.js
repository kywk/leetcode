let bubble = require("./bubble")
let counting = require("./counting")
let insertion = require("./insertion")
let selection = require("./selection")
let merge = require('./merge')

let numbers = 10
let maxValue = 100

function test(sorted) {
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i - 1] > sorted[i])
      return false
  }
  return true
}

function main() {
  let orig = []

  let args = process.argv.slice(2)
  if (args.length > 1)
    numbers = parseInt(args[1])
  if (args.length > 2)
    maxValue = parseInt(args[2])
  for (let i = 0; i < numbers; i++)
    orig.push(Math.floor(Math.random() * maxValue))
  console.log("Orig: ", orig)

  let sorted = []
  switch (args[0][0]) {
    case 'b':
    case 'B':
      sorted = bubble(orig)
      break
    case 'c':
    case 'C':
      sorted = counting(orig)
      break
    case 'i':
    case 'I':
      sorted = insertion(orig)
      break
    case 's':
    case 'S':
      sorted = selection(orig)
      break
    case 'm':
    case 'M':
      sorted = selection(orig)
      break
    case 'q':
    case 'Q':
      sorted = selection(orig)
      break
  }
  console.log("Sorted: ", sorted)

  if (test(sorted)) {
    console.log(">> Pass")
    process.exit(0)
  } else {
    console.log(">> Fail")
    process.exit(-1)
  }
}

main()
