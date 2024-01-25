function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i
    let temp = array[i]
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j // keep track the min index
      }
    }
    array[i] = array[min]
    array[min] = temp
  }
  return array
}

const list = [100, 20, 50, 200, 80]
selectionSort(list)
console.log(list)
