export function Insertion (nums: Array<number>): Array<number> {
  for (let i = 1; i < nums.length; i++) {
    for (let j = i; j > 0; j--) {
      if (nums[j - 1] > nums[j]) {
        let tmp = nums[j]
        nums[j] = nums[j - 1]
        nums[j - 1] = tmp
      }
    }
  }
  return nums
}
