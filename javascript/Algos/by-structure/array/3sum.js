/**
 * @param {number[]} nums
 * @return {number[][]}
 * @description Tags: two pointers, Greedy and Array
*/


const threeSum = function (nums) {
  const results = [];
  if (nums.length < 3) return results;

  nums.sort((a, b) => a - b)

  const target = 0;

  // eval if the condition is working
  for (let i = 0; i < nums.length - 2; i++) {

    if (nums[i] > target) break
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let j = i + 1 // middle
    let k = nums.length - 1 // right most

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k]

      if (sum === target) {
        results.push([nums[i], nums[j], nums[k]])

        while (nums[j] === nums[j + 1]) j++
        while (nums[k] === nums[k - 1]) k--

        j++
        k--

      } else if (sum < target) {
        j++
      } else {
        k--
      }
    }
  }
  return results
};
