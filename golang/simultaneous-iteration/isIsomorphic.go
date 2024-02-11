package main

// simultaneous iteration O(n) time complexity

func isIsomorphic(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	mapToS := make(map[byte]byte)
	mapToT := make(map[byte]byte)

	for i := 0; i < len(s); i++ {
		// simultaneous iteration
		charS, charT := s[i], t[i]

		if mappedChar, ok := mapToT[charS]; ok {
			if mappedChar != charT {
				return false
			}
		} else {
			mapToT[charS] = charT
		}

		if mappedChar, ok := mapToS[charT]; ok {
			if mappedChar != charS {
				return false
			}
		} else {
			mapToS[charT] = charS
		}
	}
	return true
}
