def sort(nums):
  for i in range (len(nums) - 1, 0, -1):
    maxValue = nums[0]
    idx = 0
    for j in range(0, i + 1):
      if nums[j] > maxValue:
        maxValue = nums[j]
        idx = j
    nums[idx] = nums[i]
    nums[i] = maxValue
  return nums
