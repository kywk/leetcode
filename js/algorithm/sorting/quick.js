module.exports = function (nums) {
  return sort(nums, 0, nums.length - 1)
}

function sort (nums, pivotIdx, endIdx) {
  swap(nums, 0, Math.floor(Math.random() * (endIdx - pivotIdx + 1)))
  let idx = pivotIdx + 1
  for (let i = pivotIdx + 1; i <= endIdx; i++) {
    if (nums[i] < nums[pivotIdx]) {
      swap(nums, i, idx)
      idx++
    }
  }
  swap(nums, pivotIdx, idx - 1)

  if (pivotIdx < idx - 2) {
    sort(nums, pivotIdx, idx - 2)
  }
  if (idx < endIdx) {
    sort(nums, idx, endIdx)
  }

  return nums
}

function swap (nums, i, j) {
  let tmp = nums[i]
  nums[i] = nums[j]
  nums[j] = tmp
}
