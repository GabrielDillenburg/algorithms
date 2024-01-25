function reverse (value) {
  const str = value.split('')
  let start = 0
  let end = str.length -1
  while (start <= end) {
    const temp = str[start]
    str[start] = str[end]
    str[end] = temp
    end--
    start++
  }
  return str.join('')
}

console.log(reverse('gabriel'))