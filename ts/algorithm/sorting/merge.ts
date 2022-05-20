export function Merge (nums: Array<number>): Array<number> {
  return sort(nums)
}

function sort (nums: Array<number>): Array<number> {
  if (nums.length <= 1)
    return nums

  let middle = Math.floor(nums.length / 2)
  let idx = 0
  let left: Array<number> = []
  for (; idx < middle; idx++)
    left.push(nums[idx])
  let right: Array<number> = []
  for (; idx < nums.length; idx++)
    right.push(nums[idx])

  return merge(sort(left), sort(right))
}

function merge (left: Array<number>, right: Array<number>): Array<number> {
  let result: Array<number> = []

  while ((left.length > 0) && (right.length > 0)) {
    if (left[0] < right[0]) {
      result.push(left[0])
      left = left.slice(1)
    } else {
      result.push(right[0])
      right = right.slice(1)
    }
  }

  result = result.concat(left)
  result = result.concat(right)

  return result
}
