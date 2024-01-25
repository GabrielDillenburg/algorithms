/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 * @description Tags: array, brute force
 */
var chunk = function(arr, size) {
  const result = [];
  const limit = size;

  let i = 0; // indice do arr
  let j = 0 // indice do result
  let subArray = [];

  while (i < arr.length) {
      const value = arr[i]
      subArray.push(value)
      if (subArray.length === limit || arr[i + 1] === undefined) {
          result[j] = subArray
          subArray = []
          j++
      }
      i++  
  }
  return result
};