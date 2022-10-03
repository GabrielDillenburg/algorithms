function insertionSort(array) {
  for (let i = 0; i < array.length; i++) { // 1
    console.log(i)
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0])
    } else {
      for (let j = 1; j < i; j++) { // 2
        if (array[i] > array[j-1] && array[i] < array[j]) {
          array.splice(j, 0, array.splice(i,1)[0])
        }
      }
    }
  }
}

const list = [100, 20, 200, 40, 80]
            //  [20, 100, 200, 40, 80]
            //  [20, 100, 200, 40, 80]
insertionSort(list)
console.log(list)
