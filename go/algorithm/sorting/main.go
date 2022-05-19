package main

import (
	"fmt"
	"math/rand"
	"os"
	"sorting/Sort"
	"strconv"
	"time"
)

const LENTH = 100
const MAX_VALUE = 1000

func generateSlice(len, max int) []int {
	rand.Seed(time.Now().UTC().UnixNano())
	result := make([]int, len)
	for i, _ := range result {
		result[i] = rand.Intn(max)
	}

	return result
}

func testResult(sorted []int) bool {
	for i := 1; i < len(sorted); i++ {
		if sorted[i] < sorted[i-1] {
			return false
		}
	}
	return true
}

func main() {
	length := LENTH
	max := MAX_VALUE
	args := os.Args[1:]
	argv := len(args)
	if argv < 1 {
		fmt.Println("Usage sort sort_algorithm [lengh] [max_value]")
	}
	if argv > 1 {
		length, _ = strconv.Atoi(args[1])
	}
	if argv > 2 {
		max, _ = strconv.Atoi(args[2])
	}

	rand.Seed(time.Now().UTC().UnixNano())
	orig := generateSlice(length, max)
	fmt.Println("A", args[0][0])
	fmt.Printf("Origin: %v\n", orig)

	var sorted []int
	switch args[0][0] {
	case 98, 66:
		sorted = Sort.Bubble(orig)
	case 99, 67:
		sorted = Sort.Counting(orig)
	case 115, 83:
		sorted = Sort.Selection(orig)
	case 105, 73:
		sorted = Sort.Insertion(orig)
	case 109, 77:
		sorted = Sort.Merge(orig)
	case 113, 81:
		sorted = Sort.Quick(orig)
	default:
		break
	}
	fmt.Printf("Sorted: %v\n", sorted)

	if testResult(sorted) {
		fmt.Println(">> Pass")
		os.Exit(0)
	} else {
		fmt.Println(">> Fail")
		os.Exit(-1)
	}
}
