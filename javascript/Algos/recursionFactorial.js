let factorial = 0
let value = 5

function findFactorialRecursive (number) {
  const multiplier = value
  factorial = factorial ? (factorial * multiplier) : number
  if (value == 1) {
    return factorial
  }
  value--
  return findFactorialRecursive()
}

console.log('result',findFactorialRecursive(5))

// another approach
function findFactorialRecursive (number) {
  if (number === 2) {
    return 2
  }
  
  return number * findFactorialRecursive(number -1)
}