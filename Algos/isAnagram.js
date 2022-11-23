function isAnagram (str1, str2) {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    throw new Error('only string are acceptable')
  }

  const arg1 = str1.split('').sort().join('')
  const arg2 = str2.split('').sort().join('')

  return arg1 === arg2
}

console.log(isAnagram('leirbag', 'gabriel'))