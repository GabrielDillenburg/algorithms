// Given a number N return the index value of the Fibonacci sequence,
// where the sequence is: 

// sequence: 0, 1, 1, 2, 3... fibo is the sum of the 2 previous values


function fiboRecursive (n) {
  if (n < 2) {
    return n
  }
    
  return fiboRecursive(n-1) + fiboRecursive(n-2)
}

console.log('result', fiboRecursive(5))