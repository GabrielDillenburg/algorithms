// Given a number N return the index value of the Fibonacci sequence,
// where the sequence is: 

// sequence: 0, 1, 1, 2, 3... fibo is the sum of the 2 previous values


function fiboRecursive (n) {
  let index = n
  let previous = 0
  let med = 1
  let fibo = med + previous
  previous = med
  med = fibo
  


  if (index === 1) {
    return fibo
  }
  
  console.log(index)
  
  return fiboRecursive(n-1)
}

console.log('result', fiboRecursive(5))