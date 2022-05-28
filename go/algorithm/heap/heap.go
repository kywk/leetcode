/* Hint:
 * parent(i) = i>>1, index i divided by 2 (integer division),
 * left(i) = i<<1, index i multiplied by 2,
 * right(i) = (i<<1)+1, index i multiplied by 2 and added by 1.
 */

package heap

import "fmt"

type Heap []int

func NewHeap() *Heap {
	h := make(Heap, 0)
	return &h
}

func (h *Heap) String() string {
	return fmt.Sprintf("%v", (*h)[1:])
}

func (h *Heap) Create(nums []int) {
	*h = []int{-1}
	*h = append(*h, nums...)

	for i := len(nums) / 2; i >= 1; i-- {
		h.siftDown(i)
	}
}

func (h *Heap) Insert(num int) {
	*h = append(*h, num)
	h.siftUp(len(*h) - 1)
}

func (h *Heap) ExtractMax() (int, error) {
	if len(*h) < 1 {
		return 0, fmt.Errorf("Empty Heap")
	}

	result := (*h)[1]
	(*h)[1] = (*h)[len(*h)-1]
	*h = (*h)[:len(*h)-1]
	h.siftDown(1)
	return result, nil
}

func (h *Heap) UpdateKey(idx, newValue int) {
	if idx < 1 || idx >= len(*h) {
		return
	}
	(*h)[idx] = newValue
	h.siftUp(idx)
	h.siftDown(idx)
}

func (h *Heap) Delete(idx int) {
	if idx < 1 || idx >= len(*h) {
		return
	}

	(*h)[idx] = (*h)[1] + 1
	h.siftUp(idx)
	_, _ = h.ExtractMax()
}

func (h *Heap) siftUp(idx int) {
	parent := idx >> 1
	for idx > 1 && (*h)[idx] > (*h)[parent] {
		(*h)[idx], (*h)[parent] = (*h)[parent], (*h)[idx]
		idx = parent
		parent = idx >> 1
	}
}

func (h *Heap) siftDown(idx int) {
	isLChildLarger := false
	isRChildLarger := false

	left := idx << 1
	if left < len(*h) && (*h)[left] > (*h)[idx] {
		isLChildLarger = true
	}

	right := left + 1
	if right < len(*h) && (*h)[right] > (*h)[idx] {
		isRChildLarger = true
	}

	if isLChildLarger && isRChildLarger {
		if (*h)[right] > (*h)[left] {
			(*h)[right], (*h)[idx] = (*h)[idx], (*h)[right]
			h.siftDown(right)
		} else {
			(*h)[left], (*h)[idx] = (*h)[idx], (*h)[left]
			h.siftDown(left)
		}
	} else if isRChildLarger {
		(*h)[right], (*h)[idx] = (*h)[idx], (*h)[right]
		h.siftDown(right)
	} else if isLChildLarger {
		(*h)[left], (*h)[idx] = (*h)[idx], (*h)[left]
		h.siftDown(left)
	}
}
