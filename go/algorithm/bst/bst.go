package bst

import "fmt"

const NOTFOUND = -1

type IBSTNode interface {
	search(int) bool
	insert(int)
	remove(int) IBSTNode
	findMin() int
	findMax() int
	findPredecessor(int) int
	findSuccessor(int) int
	inorder(*[]int)
}

type BST struct {
	root IBSTNode
}

func NewBST(data interface{}) *BST {
	switch t := data.(type) {
	case int:
		return &BST{newBSTNode(t)}
	case []int:
		bst := &BST{newBSTNode(t[0])}
		for i := 1; i < len(t); i++ {
			bst.Insert(t[i])
		}
		return bst
	default:
		return nil
	}
}

func NewAVL(data interface{}) *BST {
	switch t := data.(type) {
	case int:
		return &BST{newAVLNode(t)}
	case []int:
		bst := &BST{newAVLNode(t[0])}
		for i := 1; i < len(t); i++ {
			bst.Insert(t[i])
		}
		return bst
	default:
		return nil
	}
}

func (bst *BST) Search(val int) bool {
	if bst.root == nil {
		return false
	}
	return bst.root.search(val)
}

func (bst *BST) Insert(val int) {
	fmt.Println(">> insert ", val)
	if bst.root == nil {
		return
	}
	bst.root.insert(val)
}

func (bst *BST) Remove(val int) {
	fmt.Println(">> remove ", val)
	if bst.root == nil {
		return
	}
	bst.root = bst.root.remove(val)
}

func (bst *BST) FindMin() int {
	if bst.root == nil {
		return NOTFOUND
	}
	return bst.root.findMin()
}

func (bst *BST) FindMax() int {
	if bst.root == nil {
		return NOTFOUND
	}
	return bst.root.findMax()
}

func (bst *BST) FindPredecessor(val int) int {
	if bst.root == nil {
		return NOTFOUND
	}
	return bst.root.findPredecessor(val)
}

func (bst *BST) FindSuccessor(val int) int {
	if bst.root == nil {
		return NOTFOUND
	}
	return bst.root.findSuccessor(val)
}

func (bst *BST) Inorder() []int {
	if bst.root == nil {
		return nil
	}
	result := make([]int, 0)
	bst.root.inorder(&result)
	return result
}
