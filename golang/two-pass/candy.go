package main

// two pass approach! amazing.

func candy(ratings []int) int {
	len := len(ratings)
	candies := make([]int, len)

	for i := range ratings {
		candies[i] = 1
	}

	// left to the right
	for i := 1; i < len; i++ {
		if ratings[i] > ratings[i-1] {
			candies[i] = candies[i-1] + 1
		}
	}

	// right to the left
	for i := len - 2; i >= 0; i-- {
		if ratings[i] > ratings[i+1] && candies[i] <= candies[i+1] {
			candies[i] = candies[i+1] + 1
		}
	}

	totalCandies := 0
	for _, c := range candies {
		totalCandies += c
	}

	return totalCandies
}
