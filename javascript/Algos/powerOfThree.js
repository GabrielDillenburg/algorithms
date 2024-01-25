function powerOfThree(num) {
  let currentQuotient = num
  
  while (currentQuotient >= 1) {
    currentQuotient = currentQuotient / 3
    if (currentQuotient === 1) {
      return true
    }
  }

  return false
}

console.log(powerOfThree(27))