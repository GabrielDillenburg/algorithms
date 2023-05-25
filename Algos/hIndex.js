/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  const len = citations.length
  let i = 0
  const sortedArray = citations.sort((a, b) => b - a)

  while(i < len) {
      const el = sortedArray[i]
      if (el < i + 1) return i
      i++
  }

  return i
};

hIndex([1, 2])