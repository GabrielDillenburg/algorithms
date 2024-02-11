package main

/*
Hash Map for Index Tracking
Iterative Checking
Early Exit
Space-Optimized Storage
*/

func containsNearbyDuplicate(nums []int, k int) bool {
	indexMap := make(map[int]int)

	for i, v := range nums {
		if lastIndex, ok := indexMap[v]; ok {
			if i-lastIndex <= k {
				return true
			}
		}

		indexMap[v] = i
	}

	return false
}
