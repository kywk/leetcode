module.exports = function (nums) {
  return sort(nums)
}

function sort (nums) {
  if (nums.length <= 1) {
    return nums
  }

  let middle = Math.floor(nums.length / 2)

  return merge(sort(nums.slice(0, middle)), sort(nums.slice(middle, nums.length)))
}

function merge (left, right) {
  let result = []
  while ((left.length !== 0) && (right.length !== 0)) {
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
