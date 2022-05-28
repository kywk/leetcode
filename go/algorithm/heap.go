package main

import (
	"algorithm/heap"
	"fmt"
	"math/rand"
	"os"
	"strconv"
	"time"
)

const LENTH = 10
const MAX_VALUE = 100

func generateSlice(len, max int) []int {
	rand.Seed(time.Now().UTC().UnixNano())
	result := make([]int, len)
	for i, _ := range result {
		result[i] = rand.Intn(max)
	}

	return result
}

func testHeap(h heap.Heap) bool {
	for i := 1; i < len(h)>>1; i++ {
		if h[i] < h[i<<1] || h[i] < h[(i<<1)+1] {
			return false
		}
	}
	return true
}

func mainHeap(args []string) {
	length := LENTH
	max := MAX_VALUE
	argv := len(args)
	if argv > 0 {
		length, _ = strconv.Atoi(args[0])
	}
	if argv > 1 {
		max, _ = strconv.Atoi(args[1])
	}

	rand.Seed(time.Now().UTC().UnixNano())
	orig := generateSlice(length, max)
	fmt.Printf("Origin: %v\n", orig)

	h := heap.NewHeap()
	h.Create(orig)
	fmt.Println("Heap:", h)

	// Random operation of Heap
	for i := 0; i <= 10; i++ {
		j := rand.Intn(4)
		idx := rand.Intn(len(*h))
		newv := rand.Intn(max)
		if j == 0 {
			h.Insert(newv)
			fmt.Println("Insert:", newv, h)
		} else if j == 1 {
			e, _ := h.ExtractMax()
			fmt.Println("Current Max:", e, h)
		} else if j == 2 {
			h.UpdateKey(idx, newv)
		} else {
			h.Delete(idx)
		}
	}

	if testHeap(*h) {
		fmt.Println(">> Pass")
		os.Exit(0)
	} else {
		fmt.Println(">> Fail")
		os.Exit(-1)
	}
}

func main() {
	mainHeap(os.Args[1:])
}
