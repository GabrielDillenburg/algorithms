const boxe = [1,2,3,4,5,6];

function log(array) {
  for (let i = 0, j=0; i < array.length; i++, j++) {
    //for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    //}
  }

}

log(boxe)
