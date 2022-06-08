package main

import (
	"algorithm/bst"
	"fmt"
	"math/rand"
	"os"
	"time"
)

func mainBST(args []string) {
	rand.Seed(time.Now().UTC().UnixNano())

	nums := []int{40, 54, 89, 29, 37, 18, 64, 51, 60, 55, 98, 92}
	b := bst.NewAVL(nums)
	fmt.Println(
		"test: ",
		b.FindMax(),
		b.FindPredecessor(64),
		b.FindSuccessor(60),
	)
	fmt.Println(b.Inorder())

	b.Remove(54)
	b.Insert(77)
	fmt.Println(b.Inorder())
}

func main() {
	mainBST(os.Args[1:])
}
