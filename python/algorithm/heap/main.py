import sys
import math
from random import randrange

import heap

def testHeap(data):
  test = [-1]
  test.extend(data)
  for i in range(1, len(test) >> 1, 1):
    if test[i] < test[i<<1] or test[i] < test[(i<<1) + 1]:
      return False
  return True

def main(args):
  count = 10
  maxValue = 1000

  if len(args) > 1:
    print("test")
    count = int(args[1])
  if len(args) > 2:
    maxValue = int(args[2])

  nums = []
  for i in range(count):
    nums.append(randrange(maxValue))
  print("Origin: ", nums)
  h = heap.Heap(nums)

  # Heap method test
  h.insert(randrange(maxValue))

  print("Heap: ", h.data())
  if testHeap(h.data()):
    print(">> Test Heap Pass")
  else:
    print(">> Test Heap Fail")

  nums = []
  for i in range(count):
    nums.append(randrange(maxValue))
  print("Origin: ", nums)

  sort = heap.Heap.sort(nums)
  print("Sorted: ", sort)

main(sys.argv)
