package main

// using Floyd's algorithms - Finding Cycles
// two pointers -> fast and slow.

func findDuplicate(nums []int) int {
	// using Floyd's algorithms - Finding Cycles
	slow, fast := 0, 0

	// find the first intersection
	for {
		slow = nums[slow]
		fast = nums[nums[fast]]
		if slow == fast {
			break
		}
	}

	slow2 := 0
	for {
		slow = nums[slow]
		slow2 = nums[slow2]
		if slow == slow2 {
			break
		}
	}
	return slow2
}
