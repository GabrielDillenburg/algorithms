package main

func numBusesToDestination(routes [][]int, source int, target int) int {
	if source == target {
		return 0
	}

	// Mapping from a bus stop to the list of routes (buses) that go through it.
	stopToRoutes := make(map[int][]int)
	for i, route := range routes {
		for _, stop := range route {
			stopToRoutes[stop] = append(stopToRoutes[stop], i)
		}
	}

	visitedRoutes := make([]bool, len(routes))
	visitedStops := make(map[int]bool)
	queue := []int{source}
	// Distance in terms of number of buses taken
	distance := 0

	for len(queue) > 0 {
		distance++
		// Process the current layer of BFS
		for size := len(queue); size > 0; size-- {
			currentStop := queue[0]
			queue = queue[1:]
			for _, routeIndex := range stopToRoutes[currentStop] {
				if visitedRoutes[routeIndex] {
					continue
				}
				visitedRoutes[routeIndex] = true
				for _, nextStop := range routes[routeIndex] {
					if nextStop == target {
						return distance
					}
					if !visitedStops[nextStop] {
						visitedStops[nextStop] = true
						queue = append(queue, nextStop)
					}
				}
			}
		}
	}

	return -1
}
