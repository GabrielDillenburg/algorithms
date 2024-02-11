package main

import "sort"

func merge(intervals [][]int) [][]int {
	if len(intervals) == 0 {
		return intervals
	}

	sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][0] < intervals[j][0]
	})

	merged := make([][]int, 0)
	merged = append(merged, intervals[0])

	for i := 1; i < len(intervals); i++ {
		lastInterval := merged[len(merged)-1]
		currentInterval := intervals[i]

		if currentInterval[0] <= lastInterval[1] {
			// merge arrays
			lastInterval[1] = max(currentInterval[1], lastInterval[1])
		} else {
			// no overlap
			merged = append(merged, currentInterval)
		}
	}
	return merged
}

func max(a, b int) int {
	if a > b {
		return a
	} else {
		return b
	}
}
