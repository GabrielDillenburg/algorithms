package main

import (
	"sort"
)

func insert(intervals [][]int, newInterval []int) [][]int {
	if len(intervals) == 0 {
		return [][]int{newInterval}
	}

	intervals = append(intervals, newInterval)

	sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][0] < intervals[j][0]
	})

	newMerge := make([][]int, 0)
	newMerge = append(newMerge, intervals[0])

	for i := 1; i < len(intervals); i++ {
		lastInterval := newMerge[len(newMerge)-1]
		currentInterval := intervals[i]

		if currentInterval[0] <= lastInterval[1] {
			lastInterval[1] = max(currentInterval[1], lastInterval[1])
		} else {
			newMerge = append(newMerge, currentInterval)
		}
	}

	return newMerge
}

// the implementation is in another file (in the same package)
// func max(a, b int) int {
// 	if a > b {
// 		return a
// 	}
// 	return b
// }
