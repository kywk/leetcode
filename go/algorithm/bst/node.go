package bst

type Node struct {
	value int
	left  *Node
	right *Node
}

func (n *Node) search(v int) bool {
	if n == nil {
		return false
	}
	if n.value == v {
		return true
	}
	if n.value > v {
		return n.left.search(v)
	} else {
		return n.right.search(v)
	}
}

func (n *Node) insert(v int) {
	if n.value <= 0 {
		n.value = v
		return
	}

	if n.value > v {
		if n.left != nil {
			n.left.insert(v)
		} else {
			n.left = &Node{v, nil, nil}
		}
	} else {
		if n.right != nil {
			n.right.insert(v)
		} else {
			n.right = &Node{v, nil, nil}
		}
	}
}

func (n *Node) remove(v int) {
	n.doRemove(v)
}

func (n *Node) doRemove(v int) *Node {
	// v not found
	if n == nil {
		return nil
	}

	if n.value > v {
		n.left = n.left.doRemove(v)
		return n
	}
	if n.value < v {
		n.right = n.right.doRemove(v)
		return n
	}
	// n.value = v
	if n.left == nil && n.right == nil {
		return nil
	}
	if n.left == nil {
		return n.right
	}
	if n.right == nil {
		return n.left
	}

	successor := n.right.findMinNode()
	n.value, successor.value = successor.value, n.value
	n.right = n.right.doRemove(v)
	return n
}

func (n *Node) findMin() int {
	if n == nil {
		return -1
	}
	if n.left == nil {
		return n.value
	}
	return n.left.findMin()
}

func (n *Node) findMax() int {
	if n == nil {
		return -1
	}
	if n.right == nil {
		return n.value
	}
	return n.right.findMax()
}

func (n *Node) findMinNode() *Node {
	if n == nil {
		return nil
	}
	if n.left == nil {
		return n
	}
	return n.left.findMinNode()
}

func (n *Node) findPredecessor(v int) int {
	predecessor := -1
	for n != nil && n.value != v {
		if n.value < v {
			predecessor = n.value
			n = n.right
		} else {
			n = n.left
		}
	}

	if n == nil {
		return -1
	}
	if n.left != nil {
		return n.left.findMax()
	} else {
		return predecessor
	}
}

func (n *Node) findSuccessor(v int) int {
	successor := -1
	for n != nil && n.value != v {
		if n.value > v {
			successor = n.value
			n = n.left
		} else {
			n = n.right
		}
	}

	if n == nil {
		return -1
	}
	if n.right != nil {
		return n.right.findMin()
	} else {
		return successor
	}
}

func (n *Node) inorder(nums *[]int) {
	if n == nil {
		return
	}

	n.left.inorder(nums)
	*nums = append(*nums, n.value)
	n.right.inorder(nums)
}
