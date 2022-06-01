package bst

import "fmt"

type BST struct {
	root INode
}

type INode interface {
	search(int) bool
	insert(int)
	remove(int)
	findMin() int
	findMax() int
	findPredecessor(int) int
	findSuccessor(int) int
	inorder(nums *[]int)
}

func NewBST(nums []int) *BST {
	root := newAVLNode(-1)
	bst := BST{root}
	for _, v := range nums {
		bst.Insert(v)
	}
	return &bst
}

func (bst *BST) Search(v int) bool {
	return bst.root.search(v)
}

func (bst *BST) Insert(v int) {
	fmt.Println(">> insert ", v)
	bst.root.insert(v)
}

func (bst *BST) Remove(v int) {
	fmt.Println(">> remove ", v)
	bst.root.remove(v)
}

func (bst *BST) FindMin() int {
	return bst.root.findMin()
}

func (bst *BST) FindMax() int {
	return bst.root.findMax()
}

func (bst *BST) FindPredecessor(v int) int {
	return bst.root.findPredecessor(v)
}

func (bst *BST) FindSuccessor(v int) int {
	return bst.root.findSuccessor(v)
}

func (bst *BST) Inorder() []int {
	if bst.root == nil {
		return nil
	}
	result := make([]int, 0)
	bst.root.inorder(&result)
	return result
}
