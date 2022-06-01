package bst

type AVLNode struct {
	value  int
	height int
	left   *AVLNode
	right  *AVLNode
}

func newAVLNode(v int) *AVLNode {
	return &AVLNode{
		value:  v,
		height: 1,
		left:   nil,
		right:  nil,
	}
}

func max(x, y int) int {
	if x < y {
		return y
	} else {
		return x
	}
}

func (avl *AVLNode) Height() int {
	if avl == nil {
		return 0
	}
	return avl.height
}

func (avl *AVLNode) updateHeight() {
	avl.height = max(avl.left.Height(), avl.right.Height()) + 1
}

func (avl *AVLNode) balanceFactor() int {
	return avl.left.Height() - avl.right.Height()
}

func (avl *AVLNode) rotateRight() *AVLNode {
	result := avl.left
	t := result.right

	avl.left = t
	avl.height--

	result.right = avl
	result.height++

	return result
}

func (avl *AVLNode) rotateLeft() *AVLNode {
	result := avl.right
	t := result.left

	avl.right = t
	avl.height--

	result.left = avl
	result.height++

	return result
}

func (avl *AVLNode) insert(v int) {
	if avl.value <= 0 {
		avl.value = v
		return
	}

	if avl.value > v {
		avl.left = avl.left.doInsert(v)
	} else {
		avl.right = avl.right.doInsert(v)
	}
}

func (avl *AVLNode) doInsert(v int) *AVLNode {
	if avl == nil {
		return newAVLNode(v)
	}

	if avl.value > v {
		avl.left = avl.left.doInsert(v)
	} else {
		avl.right = avl.right.doInsert(v)
	}

	return avl.rotateInsert(v)
}

func (avl *AVLNode) rotateInsert(v int) *AVLNode {
	avl.updateHeight()
	bf := avl.balanceFactor()

	if bf > 1 {
		if v > avl.left.value {
			avl.left = avl.left.rotateLeft()
		}
		return avl.rotateRight()
	} else if bf < -1 {
		if v < avl.right.value {
			avl.right = avl.right.rotateRight()
		}
		return avl.rotateLeft()
	} else {
		return avl
	}
}

// Same as Node

func (avl *AVLNode) search(v int) bool {
	if avl == nil {
		return false
	}
	if avl.value == v {
		return true
	}
	if avl.value > v {
		return avl.left.search(v)
	} else {
		return avl.right.search(v)
	}
}

func (avl *AVLNode) remove(v int) {
	avl.doRemove(v)
}

func (avl *AVLNode) doRemove(v int) *AVLNode {
	// v not found
	if avl == nil {
		return nil
	}

	if avl.value > v {
		avl.left = avl.left.doRemove(v)
		return avl
	}
	if avl.value < v {
		avl.right = avl.right.doRemove(v)
		return avl
	}
	// avl.value = v
	if avl.left == nil && avl.right == nil {
		return nil
	}
	if avl.left == nil {
		return avl.right
	}
	if avl.right == nil {
		return avl.left
	}

	successor := avl.right.findMaxNode()
	avl.value, successor.value = successor.value, avl.value
	avl.right = avl.right.doRemove(v)
	return avl
}

func (avl *AVLNode) findMin() int {
	if avl == nil {
		return -1
	}
	if avl.left == nil {
		return avl.value
	}
	return avl.left.findMin()
}

func (avl *AVLNode) findMax() int {
	if avl == nil {
		return -1
	}
	if avl.right == nil {
		return avl.value
	}
	return avl.right.findMax()
}

func (avl *AVLNode) findMaxNode() *AVLNode {
	if avl == nil {
		return nil
	}
	if avl.right == nil {
		return avl
	}
	return avl.right.findMaxNode()
}

func (avl *AVLNode) findPredecessor(v int) int {
	predecessor := -1
	for avl != nil && avl.value != v {
		if avl.value < v {
			predecessor = avl.value
			avl = avl.right
		} else {
			avl = avl.left
		}
	}

	if avl == nil {
		return -1
	}
	if avl.left != nil {
		return avl.left.findMax()
	} else {
		return predecessor
	}
}

func (avl *AVLNode) findSuccessor(v int) int {
	successor := -1
	for avl != nil && avl.value != v {
		if avl.value > v {
			successor = avl.value
			avl = avl.left
		} else {
			avl = avl.right
		}
	}

	if avl == nil {
		return -1
	}
	if avl.right != nil {
		return avl.right.findMin()
	} else {
		return successor
	}
}

func (avl *AVLNode) inorder(nums *[]int) {
	if avl == nil {
		return
	}

	avl.left.inorder(nums)
	*nums = append(*nums, avl.value)
	avl.right.inorder(nums)
}
