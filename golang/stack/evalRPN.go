package main

import (
	"strconv"
)

func evalRPN(tokens []string) int {
	stack := []int{}

	for _, token := range tokens {
		switch token {
		case "*", "/", "+", "-":
			var result int
			left, right := stack[len(stack)-2], stack[len(stack)-1]
			stack = stack[:len(stack)-2]
			switch token {
			case "*":
				result = left * right
			case "/":
				result = left / right
			case "+":
				result = left + right
			case "-":
				result = left - right
			}
			stack = append(stack, result)
		default:
			num, _ := strconv.Atoi(token)
			stack = append(stack, num)
		}
	}

	return stack[0]
}
