/*
 *
 */

package sorting

func Insertion(nums []int) []int {
	len := len(nums)
	for i := 1; i < len; i++ {
		for j := i; j > 0; j-- {
			if nums[j-1] > nums[j] {
				nums[j-1], nums[j] = nums[j], nums[j-1]
			} else {
				continue
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
	Insertion(nums)
	fmt.Printf("Result: \n%v \n", nums)
}
*/
