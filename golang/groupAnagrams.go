package main

import (
	"sort"
)

func groupAnagrams(strs []string) [][]string {
	groupMap := make(map[string][]string)

	for _, str := range strs {
		sortedStr := sortString(str)
		groupMap[sortedStr] = append(groupMap[sortedStr], str)
	}

	output := make([][]string, 0, len(groupMap))
	for _, group := range groupMap {
		output = append(output, group)
	}

	return output
}

func sortString(s string) string {
	runes := []rune(s)
	sort.Slice(runes, func(i, j int) bool {
		return runes[i] < runes[j]
	})

	return string(runes)
}
