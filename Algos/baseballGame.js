/**
 * @param {string[]} operations
 * @return {number}
 */
 var calPoints = function(operations) {
  const array = []
  for (let i = 0; i < operations.length; i++) {
    const value = operations[i]
    const previous = operations[i-1]
    const previous2 = operations[i-2]
    
    if (value == '+') {
      const item = parseInt(previous) + parseInt(previous2)
      array.push(item)
    } else if (value == 'D') {
      const item = 2 * parseInt(previous)
      array.push(item)
    } else if (value == 'C') {
      array.pop()
    } else {
      const item = parseInt(value)
      array.push(item)
    }
    
    return array
    
  }
    
};

const ops = ["5","2","C","D","+"]

console.log(calPoints(ops))