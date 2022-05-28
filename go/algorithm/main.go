package main

import (
	"math/rand"
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
