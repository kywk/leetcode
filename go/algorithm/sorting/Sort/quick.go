package Sort

func Quick(nums []int) []int {
	quick(&nums, 0, len(nums)-1)
	return nums
}

func quick(nums *[]int, pivotIdx, endIdx int) {
	storeIdx := pivotIdx + 1
	for i := pivotIdx + 1; i <= endIdx; i++ {
		if (*nums)[i] < (*nums)[pivotIdx] {
			(*nums)[i], (*nums)[storeIdx] = (*nums)[storeIdx], (*nums)[i]
			storeIdx++
		}
	}
	(*nums)[pivotIdx], (*nums)[storeIdx-1] = (*nums)[storeIdx-1], (*nums)[pivotIdx]

	if pivotIdx < storeIdx-2 {
		quick(nums, pivotIdx, storeIdx-2)
	}
	if storeIdx < endIdx {
		quick(nums, storeIdx, endIdx)
	}
}
