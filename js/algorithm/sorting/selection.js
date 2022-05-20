module.exports = function (nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    let max = nums[0]
    let idx = 0
    for (let j = 0; j <= i; j++) {
      if (nums[j] > max) {
        max = nums[j]
        idx = j
      }
    }
    nums[idx] = nums[i]
    nums[i] = max
  }
  return nums
}
