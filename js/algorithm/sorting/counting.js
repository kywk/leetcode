module.exports = function (nums) {
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max)
      max = nums[i]
  }

  let count = new Array(max + 1).fill(0)
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]]++
  }

  let result = []
  for (let i = 0; i <= max; i++) {
    for (let j = 0; j < count[i]; j++) {
      result.push(i)
    }
  }
  return result
}
