/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const blank = " "
  const len = s.length
  let findRealChar = false
  let ans = ""
  for (let i=len-1; i >= 0; i--) {
      if (s[i] !== blank) findRealChar = true, ans += s[i]  
      else if (findRealChar) break    
  }
  return ans.length
};


