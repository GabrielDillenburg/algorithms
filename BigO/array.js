// array (limited number of items inside of array) and dynamic array

class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }

  push (item) {
    this.data[this.length] = item
    this.length++
    return this.length
  }

  pop () {
    const lastItem = this.data[this.length -1]
    delete this.data[this.length -1]
    this.length--;
    return lastItem
  }

  get (index) {
    const item = this.data[index]
    return item
  }

  delete (index) {
    const item =  this.data[index]
    this.shiftItems(index)
    return item
  }

  shiftItems(index) {
    for (let i = index; i < this.length -1; i++) {
      this.data[i] = this.data[i+1]
    }
    delete this.data[this.length -1]
    this.length--
  }
}
const newArray = new MyArray()
newArray.push('vavis')
newArray.push('gabriel')
newArray.push('carlo')
newArray.delete(1)

// STRING (array of strings)
function reverse(str) {
  const rev = []
  for (let i = str.length -1; i >=0; i--) {
    rev.push(str[i])
  }
  return rev.join('')
}
reverse('gabriel')

// merge and sort arrays

  function mergeSortedArrays(array1, array2){
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;
    
    //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
    if(array1.length === 0) {
      return array2;
    }
    if(array2.length === 0) {
      return array1;
    }
  
    while (array1Item || array2Item){
     if(array2Item === undefined || array1Item < array2Item){
       mergedArray.push(array1Item);
       array1Item = array1[i];
       i++;
     }   
     else {
       mergedArray.push(array2Item);
       array2Item = array2[j];
       j++;
     }
    }
    return mergedArray;
  }
  // dont forgot: SORTED arrays to this solution works.
  mergeSortedArrays([0,3,4,31], [3,4,6,30]);


