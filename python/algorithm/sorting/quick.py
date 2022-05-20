def sort(nums):
  return quickSort(nums, 0, len(nums) - 1)

def quickSort(nums, pivot, end):
  store = pivot + 1
  for i in range (store, end + 1):
    if nums[pivot] > nums[i]:
      swap(nums, i, store)
      store += 1
  swap(nums, pivot, store - 1)

  if pivot < store - 2:
    quickSort(nums, pivot, store - 2)
  if store < end:
    quickSort(nums, store, end)

  return nums

def swap(nums, i, j):
  tmp = nums[i]
  nums[i] = nums[j]
  nums[j] = tmp
