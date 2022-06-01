let BST = require("./bst")

const TEST_TIMES = 10

let numbers = 7
let maxValue = 100

function testSort(sorted) {
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i - 1] > sorted[i])
      return false
  }
  return true
}

function mainBst(args) {
  if (args.length > 0)
    numbers = parseInt(args[0])
  if (args.length > 1)
    maxValue = parseInt(args[1])

  nums = [40, 54, 89, 29, 37, 18, 64, 51, 60, 55, 98, 92]
  bst = new BST(nums)
  console.log("findPredecessor", 64, bst.findPredecessor(64))
  console.log("findSuccessor", 64, bst.findSuccessor(64))
  console.log("inorder", bst.inorder())

  bst.remove(54)
  console.log("inorder", bst.inorder())
}

mainBst(process.argv.slice(2))
