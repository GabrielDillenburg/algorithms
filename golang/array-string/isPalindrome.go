package main

import (
	"strings"
	"unicode"
)

func isPalindrome(s string) bool {
	var str string

	// Build a string with only alphanumeric characters in lowercase
	for _, v := range s {
		if unicode.IsLetter(rune(v)) || unicode.IsNumber(rune(v)) {
			str += strings.ToLower(string(v))
		}
	}

	// Check if str is empty
	if len(str) == 0 {
		return true
	}

	// Check if str is a palindrome
	for i := 0; i < len(str)/2; i++ {
		if str[i] != str[len(str)-1-i] {
			return false
		}
	}
	return true
}
