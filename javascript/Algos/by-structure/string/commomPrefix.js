var longestCommonPrefix = function(strs) {
  if (strs.length === 1) return strs[0]
  let prefix = ""
  const map = {}
  for (let i=0; i < strs[0].length; i++) {
    const el = strs[0][i]
    map[el] = i
    let counter = 0
    for (let j=1; j < strs.length; j++) {
      const currentEl = strs[j][i]
      counter++
      if (map[currentEl] !== i) return prefix
      if (counter === strs.length -1) {
          prefix += currentEl
      }
    }    
  }
  return prefix  
};