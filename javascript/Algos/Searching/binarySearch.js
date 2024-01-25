
const collection = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const binarySearch = (arr, target) => {

  let left = 0
  let right = arr.length - 1
  let mid;

  while (mid >=1) {
    // this is about indexes
    mid = left + Math.floor((right - left) / 2)

    if (arr[mid] === target) return mid

    if (target < arr[mid]) right = mid - 1
    if (target > arr[mid]) left = mid + 1
    console.log(mid)
  }
  return -1
}

console.log(binarySearch(collection, 1))