import math

def sort(nums):
  if len(nums) <= 1:
    return nums

  middle = len(nums) // 2
  left = nums[:middle]
  right = nums[middle:]

  return merge(sort(left), sort(right))

def merge(left, right):
  l = 0
  r = 0
  result = []

  while l < len(left) and r < len(right):
    if left[l] < right[r]:
      result.append(left[l])
      l += 1
    else:
      result.append(right[r])
      r += 1

  while l < len(left):
    result.append(left[l])
    l += 1
  while r < len(right):
    result.append(right[r])
    r += 1

  return result
