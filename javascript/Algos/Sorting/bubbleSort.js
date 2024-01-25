function bubbleSort (collection) {
  let array = []
  for (let i = 0; i < collection.length; i++) {
    for (let j = 0; j < collection.length; j++) {
      let previous = collection[j]
      let current = collection[j+1]

      if (previous > current) {
        const temp = collection[j]
        collection[j] = collection[j+1]
        collection[j+1] = temp
      }
    }
  }
  return array
}

const list = [100, 20, 50, 200, 80]
bubbleSort(list)
console.log(list)
