/**
 * @param {number} memory1
 * @param {number} memory2
 * @return {number[]}
 */
var memLeak = function(memory1, memory2) {

  if (!memory1 && !memory2) return [1, memory1, memory2]
  const sticks = { memory1, memory2, crash: false }

  function alocMemory(memo) {
      const memoryToAloc = sticks.memory1 >= sticks.memory2 ? sticks.memory1 : sticks.memory2
      const memoryName = sticks.memory1 >= sticks.memory2 ? "memory1" : "memory2"
      let newMemory = memoryToAloc - memo
      newMemory = newMemory < 0 ? (sticks.crash=true, memoryToAloc) : newMemory,
      !sticks.crash ? sticks[memoryName] = newMemory : null
      return sticks
  }

  let memoLimit = memory1 + memory2

  for (let i=0; i < memoLimit; i++) {
      const bit = i
      const newStick = alocMemory(bit)
      if (newStick.crash) return [i, newStick.memory1, newStick.memory2]
  }
};