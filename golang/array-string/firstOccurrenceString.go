package main

/*
	Optimal solution:
	KMP and LPS (longest prefix and suffix) algorithm
*/

func strStr(haystack string, needle string) int {
	if needle == "" {
		return -1
	}

	lps := make([]int, len(needle))
	lps[0] = 0
	prevLPS, i := 0, 1

	for i < len(needle) {
		if needle[prevLPS] == needle[i] {
			lps[i] = prevLPS + 1
			prevLPS++
			i++
		} else if prevLPS == 0 {
			lps[i] = 0
			i++
		} else {
			prevLPS = lps[prevLPS-1]
		}
	}

	i = 0  // ptr for haystack
	j := 0 // ptr for needle

	for i < len(haystack) {
		if needle[j] == haystack[i] {
			i++
			j++
		} else {
			if j == 0 {
				i++
			} else {
				j = lps[j-1]
			}
		}

		if j == len(needle) {
			return i - len(needle)
		}
	}

	return -1
}
