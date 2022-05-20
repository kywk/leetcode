export function Counting (nums: Array<number>): Array<number> {
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max)
      max = nums[i]
  }

  let counting: Array<number> = new Array(max + 1).fill(0)
  for (let i = 0; i < nums.length; i++) {
    counting[nums[i]]++
  }

  let result: Array<number> = []
  for (let i = 0; i < counting.length; i++) {
    for (let j = 0; j < counting[i]; j++) {
      result.push(i)
    }
  }
  return result
}
