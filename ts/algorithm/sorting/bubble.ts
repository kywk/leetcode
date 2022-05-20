export function Bubble (nums: Array<number>): Array<number> {
  for (let i = nums.length; i > 0; i--) {
    for (let j = 1; j < i; j++) {
      if (nums[j - 1] > nums[j]) {
        let tmp = nums[j - 1]
        nums[j - 1] = nums[j]
        nums[j] = tmp
      }
    }
  }
  return nums
}
