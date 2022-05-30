let Heap = require("./heap")

const TEST_TIMES = 10

let numbers = 7
let maxValue = 100

function testHeap(data) {
  for (let i = 1; i < data.length>>1; i++) {
    if ((data[i] < data[i<<1]) ||
        (data[i] < data[i<<1 + 1]))
      return false
  }
  return true
}

function testSort(sorted) {
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i - 1] > sorted[i])
      return false
  }
  return true
}

function mainHeap(args) {
  if (args.length > 0)
    numbers = parseInt(args[0])
  if (args.length > 1)
    maxValue = parseInt(args[1])

  let orig = []
  for (let i = 0; i < numbers; i++)
    orig.push(Math.floor(Math.random() * maxValue))
  console.log("Orig: ", orig)

  let heap = new Heap(orig)
  console.log("Heap: ", heap.data)

  for (let i = 0; i < TEST_TIMES; i++) {
    let j = Math.floor(Math.random() * 4)
    let idx = Math.floor(Math.random() * (heap.data.length - 1)) + 1
    let value = Math.floor(Math.random() * maxValue)
    switch (j) {
      case 0:
        heap.insert(value)
        console.log("Insert:", value, heap.data)
        break
      case 1:
        let m = heap.extractMax()
        console.log("Current Max:", m, heap.data)
        break
      case 2:
        heap.updateKey(idx, value)
        break
      case 3:
        heap.delete(idx)
        break
    }
  }

  if (testHeap(heap._data)) {
    console.log(">> Test Heap Pass")
  } else {
    console.log(">> Test Heap Fail")
    process.exit(-1)
  }

  orig = []
  for (let i = 0; i < numbers; i++)
    orig.push(Math.floor(Math.random() * maxValue))
  console.log("Origin: ", orig)
  let sorted = Heap.sort(orig)
  console.log("Sorted:", sorted)

  if (testSort(sorted)) {
    console.log(">> Test Sort Pass")
    process.exit(0)
  } else {
    console.log(">> Test Sort Fail")
    process.exit(-1)
  }
}

mainHeap(process.argv.slice(2))
