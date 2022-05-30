/*
 *
 */

package sorting

const MAX_ITEMS = 7

func Counting(nums []int) []int {
	length := len(nums)
	max := 0
	for i := 0; i < length; i++ {
		if nums[i] > max {
			max = nums[i]
		}
	}

	count := make([]int, max+1)
	for i := 0; i < length; i++ {
		count[nums[i]]++
	}

	idx := 0
	for i := 0; i < max+1; i++ {
		for j := 0; j < count[i]; j++ {
			nums[idx] = i
			idx++
		}
	}
	return nums
}

/*
func main() {
	rand.Seed(time.Now().UTC().UnixNano())
	nums := make([]int, 100)
	for i, _ := range nums {
		nums[i] = rand.Intn(MAX_ITEMS)
	}
	fmt.Printf("Origin: \n%v \n", nums)
	Counting(nums)
	fmt.Printf("Result: \n%v \n", nums)
}
*/
