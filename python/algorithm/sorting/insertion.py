def sort(nums):
  for i in range(1, len(nums)):
    for j in range(i, 0, -1):
      if nums[j - 1] > nums[j]:
        tmp = nums[j - 1]
        nums[j - 1] = nums[j]
        nums[j] = tmp
  return nums
