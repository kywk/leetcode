package bst

type BSTNode struct {
	value int
	left  *BSTNode
	right *BSTNode
}

func newBSTNode(val int) *BSTNode {
	return &BSTNode{val, nil, nil}
}

func (n *BSTNode) search(val int) bool {
	if n == nil {
		return false
	}

	if n.value > val {
		return n.left.search(val)
	} else if n.value < val {
		return n.right.search(val)
	} else {
		return true
	}
}

func (n *BSTNode) insert(val int) {
	if val < n.value {
		if n.left == nil {
			n.left = newBSTNode(val)
		} else {
			n.left.insert(val)
		}
	} else {
		if n.right == nil {
			n.right = newBSTNode(val)
		} else {
			n.right.insert(val)
		}
	}
}

func (n *BSTNode) remove(val int) IBSTNode {
	return n.removeHelper(val)
}

func (n *BSTNode) removeHelper(val int) *BSTNode {
	if n == nil {
		return nil
	}

	if val < n.value {
		n.left = n.left.removeHelper(val)
		return n
	}
	if val > n.value {
		n.right = n.right.removeHelper(val)
		return n
	}

	if n.left == nil && n.right == nil {
		return nil
	}
	if n.left == nil {
		return n.right
	}
	if n.right == nil {
		return n.left
	}

	success := n.right.findMin()
	n.value = success
	n.right = n.right.removeHelper(success)
	return n
}

func (n *BSTNode) findMin() int {
	if n.left == nil {
		return n.value
	} else {
		return n.left.findMin()
	}
}

func (n *BSTNode) findMax() int {
	if n.right == nil {
		return n.value
	} else {
		return n.right.findMax()
	}
}

func (n *BSTNode) findPredecessor(val int) int {
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

func (n *BSTNode) findSuccessor(val int) int {
	successor := NOTFOUND
	node := n
	for node != nil && node.value != val {
		if node.value > val {
			successor = node.value
			node = node.left
		} else {
			node = node.right
		}
	}
	if node == nil {
		return NOTFOUND
	}
	if node.right != nil {
		return node.right.findMin()
	} else {
		return successor
	}
}

func (n *BSTNode) inorder(buf *[]int) {
	if n == nil {
		return
	}
	n.left.inorder(buf)
	*buf = append(*buf, n.value)
	n.right.inorder(buf)
}
