package bst

func max(x, y int) int {
	if x < y {
		return y
	} else {
		return x
	}
}

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

func (n *AVLNode) getHeight() int {
	if n == nil {
		return 0
	}
	return n.height
}

func (n *AVLNode) updateHeight() {
	n.height = max(n.left.getHeight(), n.right.getHeight()) + 1
}

func (n *AVLNode) search(val int) bool {
	if n.value > val {
		return n.left.search(val)
	} else if n.value < val {
		return n.right.search(val)
	} else {
		return true
	}
}

func (n *AVLNode) insert(val int) IBSTNode {
	return n.insertHelper(val)
}

func (n *AVLNode) insertHelper(val int) *AVLNode {
	if n == nil {
		return newAVLNode(val)
	}

	if n.value > val {
		n.left = n.left.insertHelper(val)
	} else {
		n.right = n.right.insertHelper(val)
	}
	return n.rotate()
}

func (n *AVLNode) remove(val int) IBSTNode {
	return n.removeHelper(val)
}

func (n *AVLNode) removeHelper(val int) *AVLNode {
	if n == nil {
		return nil
	}

	if n.value > val {
		n.left = n.left.removeHelper(val)
	} else if n.value < val {
		n.right = n.right.removeHelper(val)
	} else {
		if n.left != nil && n.right != nil {
			successor := n.right.findMin()
			n.value = successor
			n.right = n.right.removeHelper(successor)
		} else if n.left != nil {
			n = n.left
		} else if n.right != nil {
			n = n.right
		} else {
			return nil
		}
	}
	return n.rotate()
}

func (n *AVLNode) rotate() *AVLNode {
	left := n.left.getHeight()
	right := n.right.getHeight()
	bf := left - right

	if bf > 1 {
		if n.left.left.getHeight() < n.left.right.getHeight() {
			n.left = n.left.rotateLeft()
		}
		return n.rotateRight()
	} else if bf < -1 {
		if n.right.left.getHeight() > n.right.right.getHeight() {
			n.right = n.right.rotateRight()
		}
		return n.rotateLeft()
	} else {
		n.updateHeight()
		return n
	}
}

func (n *AVLNode) rotateLeft() *AVLNode {
	result := n.right
	t := result.left

	n.right = t
	n.height--

	result.left = n
	return result
}

func (n *AVLNode) rotateRight() *AVLNode {
	result := n.left
	t := result.right

	n.left = t
	n.height--

	result.right = n
	return result
}

func (n *AVLNode) findMin() int {
	if n.left == nil {
		return n.value
	}
	return n.left.findMin()
}
func (n *AVLNode) findMax() int {
	if n.right == nil {
		return n.value
	}
	return n.right.findMax()
}

func (n *AVLNode) findPredecessor(val int) int {
	predecessor := NOTFOUND
	node := n
	for node != nil && node.value != val {
		if node.value < val {
			predecessor = node.value
			node = node.right
		} else {
			node = node.left
		}
	}

	if node == nil {
		return NOTFOUND
	}
	if node.left != nil {
		return node.left.findMax()
	} else {
		return predecessor
	}
}

func (n *AVLNode) findSuccessor(v int) int {
	successor := NOTFOUND
	node := n
	for node != nil && node.value != v {
		if node.value > v {
			successor = node.value
			node = node.left
		} else {
			node = node.right
		}
	}

	if n == nil {
		return NOTFOUND
	}
	if n.right != nil {
		return n.right.findMin()
	} else {
		return successor
	}
}

func (n *AVLNode) inorder(buf *[]int) {
	if n == nil {
		return
	}

	n.left.inorder(buf)
	*buf = append(*buf, n.value)
	n.right.inorder(buf)
}
