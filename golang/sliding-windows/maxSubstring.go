package main

/*
sliding window and hash map technique
*/

func lengthOfLongestSubstring(s string) int {
	charMapIndex := map[byte]int{}
	left := 0
	maxLength := 0

	for right := 0; right < len(s); right++ {
		if lastIndex, found := charMapIndex[s[right]]; found && lastIndex >= left {
			left = lastIndex + 1
		}

		charMapIndex[s[right]] = right

		currentLength := right - left + 1
		if currentLength > maxLength {
			maxLength = currentLength
		}
	}
	return maxLength
}
