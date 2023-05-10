// Input: arr[] = {10, 4, 3, 50, 23, 90}
 //Output: 90, 50, 23


function findLargestThreeDistinctElements (arr) {
  let first, second, third;

  if (arr.length < 3) return
  third = first = second = Number.MIN_VALUE;

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    
    if (el > first) {
      third = second
      second = first
      first = el
    } 
    else if (el > second) {
      third = second
      second = el
    }
    else if (el > third) {
      third = el
    }
  }

  console.log(first, second, third)
}

findLargestThreeDistinctElements([10, 4, 3, 50, 23, 90])