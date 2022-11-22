function reverseOnlyAlphabetical(string) {

  if ( typeof string != 'string') throw new Error('Only strings args are acceptable')

  function isCharLetter(char) {
    if (typeof char !== 'string') {
      return false;
    }
    return /^[a-zA-Z]+$/.test(char);
  }

  const swap = (array, start, end) => {
    const temp = array[start]
    array[start] = array[end]
    array[end] = temp
  }

  const result = string.split('')
  let left = 0
  let right = result.length -1

  while (left < right) {
    if (!isCharLetter(result[left])) {
      left++
    } else if (!isCharLetter(result[right])) {
      right--
    } else {
      swap (result, left++, right-- )
    }
  }

  return result.join('')
}

const stringToReverse = 'sea!$hells3'

console.log(reverseOnlyAlphabetical(stringToReverse))
// expect result:  'sll!$ehaes3'
