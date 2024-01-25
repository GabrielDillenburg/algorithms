var rotate = function(nums, k) {
  k %= nums.length
  const len = nums.length
  const arr = []
  let index = len - k

  for (i=0; i <= k-1; i++) {
      arr.push(nums[index])
      index++
  }

  for (i=0; i <= len-k-1; i++) {
      arr.push(nums[i])
  }

  for(i=0; i < len; i++) {
      nums[i]= arr[i]
  }

  console.log(nums)
};

console.log(rotate([1,2,3,4,5,6,7,8,9], 3))