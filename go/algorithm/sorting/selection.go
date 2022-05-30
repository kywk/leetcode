/*
 *
 */

package sorting

func Selection(nums []int) []int {
	len := len(nums)
	for i := 0; i < len-1; i++ {
		min := nums[i]
		minIdx := i
		for j := i; j < len; j++ {
			if nums[j] < min {
				min = nums[j]
				minIdx = j
			}
		}
		nums[i], nums[minIdx] = nums[minIdx], nums[i]
	}
	return nums
}

/*
func main() {
	rand.Seed(time.Now().UTC().UnixNano())
	nums := make([]int, 100)
	for i, _ := range nums {
		nums[i] = rand.Intn(1e4)
	}
	fmt.Printf("Origin: \n%v \n", nums)
	Selection(nums)
	fmt.Printf("Result: \n%v \n", nums)
}
*/
