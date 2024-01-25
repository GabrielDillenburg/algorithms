var maxProfit = function(prices) {
  const len = prices.length
  let left = 0
  let right = 1

  let maxProfit = 0

  for (let i=0; i <= len; i++) {
      if (prices[left] < prices[right]) {
          const profit = prices[right] - prices[left]
          maxProfit = maxProfit + profit
          left = right
          right++
      } else {
          left = right
          right++
      }
  }

  return maxProfit

};