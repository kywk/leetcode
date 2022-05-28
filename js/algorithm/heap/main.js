let Heap = require("./heap")

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

  for (let i = 0; i < 10; i++) {
    let j = Math.floor(Math.random() * 4)
    let idx = Math.floor(Math.random() * heap.data.length)
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
    console.log(">> Pass")
    process.exit(0)
  } else {
    console.log(">> Fail")
    process.exit(-1)
  }
}

mainHeap(process.argv.slice(2))
