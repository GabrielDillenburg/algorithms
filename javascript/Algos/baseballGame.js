/**
 * @param {string[]} operations
 * @return {number}
 */
 var calPoints = function(operations) {
  const array = []
  for (let i = 0; i < operations.length; i++) {
    const value = operations[i]
    const previous = array[array.length-1]
    const previous2 = array[array.length-2]
    
    if (value == '+') {
      const item = previous + previous2
      array.push(item)
    } else if (value == 'D') {
      const item = 2 * previous
      array.push(item)
    } else if (value == 'C') {
      array.pop()
    } else {
      const item = parseInt(value)
      array.push(item)
    }    
  }
  const res =  array.reduce((acc, value) => {
    return acc + value
  }, 0)
  
  return res
};

const ops = ["5","2","C","D","+"]

console.log(calPoints(ops))