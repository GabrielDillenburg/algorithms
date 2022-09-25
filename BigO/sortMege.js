const collection1 = [ 89,10, 20, 40, 400];
const collection2 = [2, 4, 100];


/*
  Time Complexity: O(n^2)
  Basicamente, estamos iterando sobre cada elemento de collection1 e collection2,
  e comparando cada elemento de cada coleção.
*/
function sortMerge(arr1, arr2) {
  const collection = arr1.concat(arr2);
  const len = collection.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let value = collection[i];
      let nextValue = collection[j];

      if (value > nextValue) {
        const temp = value;
        collection[i] = collection[j];
        collection[j] = temp;
      }
    }
  }
  console.log(collection)
}

sortMerge(collection1, collection2);
