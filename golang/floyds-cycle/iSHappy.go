package main

// Floyd's cycle algorithm - slow and fast pointers to solve the problem.
func isHappy(n int) bool {
	slow, fast := n, sumOfSsquares(n)

	for fast != 1 && fast != slow {
		slow = sumOfSsquares(slow)
		fast = sumOfSsquares(sumOfSsquares(fast))
	}

	return fast == 1
}

func sumOfSsquares(n int) int {
	sum := 0

	for n > 0 {
		digit := n % 10
		sum += digit * digit
		n /= 10
	}

	return sum
}
