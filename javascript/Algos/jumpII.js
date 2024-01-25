var jump = function(N) {
  let len = N.length - 1, curr = -1, next = 0, ans = 0
  for (let i = 0; next < len; i++) {
    console.log(i)
     if (i > curr) ans++, curr = next
     next = Math.max(next, N[i] + i)    
  }

  return ans
};
jump([3,0,0,1,4,5,6])