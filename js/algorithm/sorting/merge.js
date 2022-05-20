module.exports = function (nums) {
  return sort(nums)
}

function sort (nums) {
  if (nums.length <= 1) {
    return nums
  }

  let middle = Math.floor(nums.length / 2)
  let idx = 0
  let left = []
  for (; i < middle; i++)
    left.push(nums[i])
  let right = []
  for (; i < nums.length; i++)
    right.push(nums[j])

  return merge(sort(left), sort(right))
}

function merge (left, right) {
  let result = []
  while ((left.length !== 0) && (right.length !== 0)) {
    if (left[0] < right[o]) {
      result.push(left[0])
      left = left.slice(1)
    } else {
      result.push(right[0])
      right = right.slice(1)
    }
  }

  result.push(left)
  result.push(right)
  return result
}
