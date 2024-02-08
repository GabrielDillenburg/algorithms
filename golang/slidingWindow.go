package main

import (
	"math"
)

// sliding window technique is very beatiful approach, isn't it?
func minSubArrayLen(target int, nums []int) int {
	minLength := math.MaxInt32
	start, end, sum := 0, 0, 0
	found := false

	for end = 0; end < len(nums); end++ {
		sum += nums[end]

		for sum >= target {
			found = true
			currentLength := end - start + 1
			if currentLength < minLength {
				minLength = currentLength
			}
			sum -= nums[start]
			start++
		}
	}

	if found {
		return minLength
	}

	return 0
}
