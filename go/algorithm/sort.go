package main

import (
	"algorithm/sorting"
	"fmt"
	"math/rand"
	"os"
	"strconv"
	"time"
)

func testSort(sorted []int) bool {
	for i := 1; i < len(sorted); i++ {
		if sorted[i] < sorted[i-1] {
			return false
		}
	}
	return true
}

func mainSort(args []string) {
	length := LENTH
	max := MAX_VALUE
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
	fmt.Printf("Origin: %v\n", orig)

	var sorted []int
	switch args[0][0] {
	case 98, 66:
		sorted = sorting.Bubble(orig)
	case 99, 67:
		sorted = sorting.Counting(orig)
	case 115, 83:
		sorted = sorting.Selection(orig)
	case 105, 73:
		sorted = sorting.Insertion(orig)
	case 109, 77:
		sorted = sorting.Merge(orig)
	case 113, 81:
		sorted = sorting.Quick(orig)
	default:
		break
	}
	fmt.Printf("Sorted: %v\n", sorted)

	if testSort(sorted) {
		fmt.Println(">> Pass")
		os.Exit(0)
	} else {
		fmt.Println(">> Fail")
		os.Exit(-1)
	}
}

func main() {
	mainSort(os.Args[1:])
}
