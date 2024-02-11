package main

import "strconv"

func summaryRanges(nums []int) []string {
	var ranges []string
	if len(nums) == 0 {
		return ranges
	}

	start := nums[0]

	for i := 0; i < len(nums); i++ {

		if i == len(nums)-1 || nums[i]+1 != nums[i+1] {

			if start != nums[i] {
				ranges = append(ranges, strconv.Itoa(start)+"->"+strconv.Itoa(nums[i]))
			} else {
				ranges = append(ranges, strconv.Itoa(start))
			}

			if i != len(nums)-1 {
				start = nums[i+1]
			}
		}
	}
	return ranges
}
