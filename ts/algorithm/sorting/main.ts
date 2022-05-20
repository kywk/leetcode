import { Bubble } from "./bubble"
import { Insertion } from "./insertion"
import { Selection } from "./selection"
import { Merge } from "./merge"
import { Quick } from "./quick"
import { Counting } from "./counting"

let count = 10
let max = 100

function testResult(sorted: Array<number>): Boolean {
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] < sorted[i - 1])
      return false
  }
  return true
}

function main(args: Array<string>) {
  if (args.length > 1)
    count = parseInt(args[1])
  if (args.length > 2)
    max = parseInt(args[2])

  let nums: Array<number> = new Array(count)
  for (let i = 0; i < nums.length; i++) {
    nums[i] = Math.floor(Math.random() * max)
  }
  console.log("Origin: ", nums)

  let sorted: Array<number> = []
  switch (args[0][0]) {
    case 'b':
    case 'B':
      sorted = Bubble(nums)
      break
    case 'i':
    case 'I':
      sorted = Insertion(nums)
      break
    case 's':
    case 'S':
      sorted = Selection(nums)
      break
    case 'm':
    case 'M':
      sorted = Merge(nums)
      break
    case 'q':
    case 'Q':
      sorted = Quick(nums)
      break
    case 'c':
    case 'C':
      sorted = Counting(nums)
      break
  }
  console.log("Sorted: ", sorted)

  if (testResult(sorted))
    console.log(">> Pass")
  else
    console.log(">> Fail")
}

main(process.argv.slice(2))
