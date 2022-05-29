import { Heap } from "./heap"

const TEST_TIMES = 10

let count = 10
let max = 100

function testHeap(data: Array<number>): Boolean {
  for (let i = 1; i < data.length>>1; i++) {
    if ((data[i] < data[i<<1]) ||
        (data[i] < data[(i<<1) + 1])) {
      return false
    }
  }
  return true
}

function mainHeap(args: Array<string>) {
  if (args.length > 0)
    count = parseInt(args[0])
  if (args.length > 1)
    max = parseInt(args[0])

  let orig: Array<number> = new Array(count)
  for (let i = 0; i < orig.length; i++)
    orig[i] = Math.floor(Math.random() * max)
  console.log("Origin: ", orig)

  let heap = new Heap(orig)
  console.log("Heap: ", heap.data)

  for (let i = 0; i < TEST_TIMES; i++) {
    let j = Math.floor(Math.random() * 4)
    let idx = Math.floor(Math.random() * (heap.data.length - 1)) + 1
    let value = Math.floor(Math.random() * max)

    switch (j) {
      case 0:
        heap.insert(value)
        console.log("Insert:", value, heap.data)
        break
      case 1:
        let m = heap.extractMax()
        console.log("Current MAx:", m, heap.data)
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
