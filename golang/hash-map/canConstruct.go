package main

/* hash map approach. But is possible to use slice, like
counterSlice := make([]int, 26) 26 letters in the english alphabet
inside of the loop:
counterSlice[char - 'a'] -> 'a' represent rune 97. So, we can get the right position for each letter.
*/
func canConstruct(ransomNote string, magazine string) bool {
	counterMap := make(map[rune]int)
	for _, s := range magazine {
		counterMap[s] += 1
	}

	for _, s := range ransomNote {
		if counterMap[s] == 0 {
			return false
		}

		counterMap[s] -= 1
	}

	return true
}
