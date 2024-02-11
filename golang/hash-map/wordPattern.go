package main

import "strings"

func wordPattern(pattern string, s string) bool {

	words := strings.Fields(s)

	if len(words) != len(pattern) {
		return false
	}

	patternToWord := make(map[byte]string)
	wordToPattern := make(map[string]byte)

	for i := 0; i < len(pattern); i++ {
		p := pattern[i] // byte
		w := words[i]   //string

		if word, ok := patternToWord[p]; ok {
			if word != w {
				return false
			}
		} else {
			patternToWord[p] = w
		}

		if pattern, ok := wordToPattern[w]; ok {
			if pattern != p {
				return false
			}
		} else {
			wordToPattern[w] = p
		}
	}

	return true
}
