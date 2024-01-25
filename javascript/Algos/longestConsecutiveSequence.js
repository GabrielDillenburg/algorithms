function longestConsecutive(nums) {
  const numSet = new Set(nums)
  let maxLengthSequence = 0

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentSequenceLength = 1
      let currentNum = num + 1

      while(numSet.has(currentNum + 1)) {
        currentNum++
        currentSequenceLength++
      }

      maxLengthSequence = Math.max(currentSequenceLength, maxLengthSequence)
    }
  }

  return maxLengthSequence
}

console.log(longestConsecutive([2, 3, 4, 3, 4, 5, 6]))