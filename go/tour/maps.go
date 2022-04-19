// Implement WordCount. It should return a map of the counts of each “word”
// in the string s. The wc.Test function runs a test suite against the provided
// function and prints success or failure.
//
// You might find strings.Fields helpful.

package main

import (
	"golang.org/x/tour/wc"
	"strings"
)

func WordCount(s string) map[string]int {
	result := make(map[string]int)
	sp := strings.Split(s, " ")
	for _, v := range sp {
		result[v]++
	}
	return result
}

func main() {
	wc.Test(WordCount)
}
