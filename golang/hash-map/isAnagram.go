package main

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	counterMap := make(map[rune]int)

	for _, ch := range s {
		counterMap[ch]++
	}

	for _, ch := range t {
		counterMap[ch]--
		if counterMap[ch] < 0 {
			return false
		}
	}

	return true
}
