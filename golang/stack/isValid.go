package main

func isValid(s string) bool {
	stack := []rune{}

	for _, char := range s {
		switch char {
		case '(', '{', '[':
			// appending only open chars
			stack = append(stack, char)
		case ')', '}', ']':
			// checkk if stack is empty and if matches the chars
			if len(stack) == 0 || !matches(stack[len(stack)-1], char) {
				return false
			}
			stack = stack[:len(stack)-1]
		default:
			// invalid char
			return false
		}
	}

	// if all matches, we assume that we have a empty stack
	return len(stack) == 0
}

func matches(open, close rune) bool {
	pairs := map[rune]rune{')': '(', '}': '{', ']': '['}
	return pairs[close] == open
}
