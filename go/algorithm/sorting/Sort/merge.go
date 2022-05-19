package Sort

func Merge(nums []int) []int {
	length := len(nums)
	if length <= 1 {
		return nums
	}

	middle := int(length / 2)
	left := make([]int, middle)
	i := 0
	for i < middle {
		left[i] = nums[i]
		i++
	}

	right := make([]int, length-middle)
	for j := 0; j < length-middle; j++ {
		right[j] = nums[i]
		i++
	}

	return merge(Merge(left), Merge(right))
}

func merge(left, right []int) []int {
	result := make([]int, len(left)+len(right))

	i := 0
	for len(left) > 0 && len(right) > 0 {
		if left[0] < right[0] {
			result[i] = left[0]
			left = left[1:]
		} else {
			result[i] = right[0]
			right = right[1:]
		}
		i++
	}

	for j := 0; j < len(left); j++ {
		result[i] = left[j]
		i++
	}
	for j := 0; j < len(right); j++ {
		result[i] = right[j]
		i++
	}

	return result
}
