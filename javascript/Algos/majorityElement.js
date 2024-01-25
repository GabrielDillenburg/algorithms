function majorityElement(nums) {
  const half = nums.length / 2
  const len = nums.length -1
  const map = {}

  for (let i=0; i <= len; i++) {

    const element = nums[i]
    if (!map[element]) {
      map[element] = 1

    } else {
      map[element]++
    }

    if (map[element] > half) return element
  }

  return false

}

console.log(majorityElement([4,2,2,4,2]))