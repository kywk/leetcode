/*
 *
 */

package Sort

func Bubble(nums []int) []int {
	len := len(nums)
	for i := 0; i < len-1; i++ {
		for j := 0; j < len-1-i; j++ {
			if nums[j] > nums[j+1] {
				nums[j], nums[j+1] = nums[j+1], nums[j]
			}
		}
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
	Bubble(nums)
	fmt.Printf("Result: \n%v \n", nums)
}
*/
