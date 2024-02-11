package main

import (
	"strings"
)

func simplifyPath(path string) string {
	components := strings.Split(path, "/")
	var stack []string

	for _, component := range components {
		switch component {
		case "", ".":
			continue
		case "..":
			if len(stack) > 0 {
				stack = stack[:len(stack)-1]
			}
		default:
			stack = append(stack, component)
		}
	}

	return "/" + strings.Join(stack, "/")

}
