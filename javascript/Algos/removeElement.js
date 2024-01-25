var removeDuplicates = function(nums) {
  // remove all duplicates
  const set = new Set(nums)
  const uniqueValues = Array.from(set)
  const uniqueSize = uniqueValues.length
  const len = nums.length
  let changes = 0

  for (let i=0; i < uniqueSize; i++) {
      const uniqueEl = uniqueValues[i]
      let duplicateLimit = 0

      for (let j=0; j < len; j++) {
          const el = nums[j]

          if (el === uniqueEl && duplicateLimit >= 2) {
              nums.splice(j,1)
              nums.push(null) // to mantain the length
              j--
              changes++
              duplicateLimit++
              continue
          }
          if (el === uniqueEl) duplicateLimit++
      }
  }

  return len - changes
}

removeDuplicates([0,0,1,1,1,1,2,3,3])