/**
 * @param {number[]} height
 * @return {number}
 * @description Tags: two pointes, Greedy and Array
 * 
 */
var maxArea = function(H) {
  let ans = 0, i = 0, j = H.length -1
  while (i < j) {
      ans = Math.max(ans, Math.min(H[i], H[j]) * (j - i))
      // check the index move
      H[i] <= H[j] ? i++ : j--
  }
  return ans
};
