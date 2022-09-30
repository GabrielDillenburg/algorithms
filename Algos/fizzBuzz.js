function fizzBuzz (n) {
  let str = ''
  for (let i = 0; i <= n; i++) {
    console.log(i)
    if (i % 3 === 0 && i % 5 === 0) {
      str += 'fizzBuzz'
    } else if (i % 5 === 0) {
      str += 'Buzz'
    } else if (i % 3 === 0) {

      str += 'fizz'
    } else {
      str += i
    }
  }
  return str
}

console.log('result',fizzBuzz(15))