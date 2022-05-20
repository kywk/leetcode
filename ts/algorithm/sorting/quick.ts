export function Quick (nums: Array<number>): Array<number> {
  return sort(nums, 0, nums.length - 1)
}

function sort(nums: Array<number>, pivotIdx: number, endIdx: number): Array<number> {
  let storeIdx = pivotIdx + 1
  for (let i = storeIdx; i <= endIdx; i++) {
    if (nums[i] < nums[pivotIdx]) {
      swap(nums, i, storeIdx)
      storeIdx++
    }
  }
  swap(nums, pivotIdx, storeIdx - 1)

  if (pivotIdx < storeIdx - 2)
    sort(nums, pivotIdx, storeIdx -2)
  if (storeIdx < endIdx)
    sort(nums, storeIdx, endIdx)

  return nums
}

function swap (nums: Array<number>, i: number, j: number) {
  let tmp = nums[i]
  nums[i] = nums[j]
  nums[j] = tmp
}
