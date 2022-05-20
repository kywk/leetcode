import sys
import math
from random import randrange

import bubble
import selection
import insertion
import merge
import quick

count = 10
maxValue = 1000

def main(args):
  if len(args) > 1:
    count = int(args[2])
  if len(args) > 2:
    maxValue = int(args[3])

  nums = []
  for i in range(count):
    nums.append(randrange(maxValue))

  print("Origin: ", nums)

  sort = []
  if args[1][0] == 'b' or args[1][0] == 'B':
    sort = bubble.sort(nums)
  elif args[1][0] == 's' or args[1][0] == 'S':
    sort = selection.sort(nums)
  elif args[1][0] == 'i' or args[1][0] == 'I':
    sort = insertion.sort(nums)
  elif args[1][0] == 'm' or args[1][0] == 'M':
    sort = merge.sort(nums)
  elif args[1][0] == 'q' or args[1][0] == 'Q':
    sort = quick.sort(nums)

  print("Sorted: ", sort)

main(sys.argv)
