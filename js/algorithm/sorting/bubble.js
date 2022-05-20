module.exports = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 1; j < nums.length - i; j++) {
      if (nums[j - 1] > nums[j]) {
        let tmp = nums[j - 1]
        nums[j - 1] = nums[j]
        nums[j] = tmp
      }
    }
  }
  return nums
}
