
function sumDigitUntilOne (integer) {

  function helperSplit (number) {
    const str = number.toString()
    if (str.length < 2) return [+str[0]]
    const collection =  [+str[0], +str[1]]
    return collection
  }

  let collection = helperSplit(integer)

  while(collection.length >= 2) {
      const sum = collection[0] + collection[1]
      collection = helperSplit(sum)
  }

  return collection[0]
}

console.log(sumDigitUntilOne(99))