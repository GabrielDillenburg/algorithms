/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const space = " " //empty string, space
  let word = ""
  let res = ""

  function check(target, str) {
      if (target.length === 0) return str
      if (target[target.length-1] === space) {
          return str
      }
      return " " + str
  }

  for (let i= s.length -1; i >= 0; i--) {
      if(s[i] !== space) {
          word = s[i] + word
          if (i === 0) {
              if (res.length === 0) return word
              return res = res + " " + word
          }
          continue;
      }

      if (word.length === 0) continue
      res = res + check(res, word)
      word = ""
  }
  return res
};