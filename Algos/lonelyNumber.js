function lonelyNumber (nums) {
  const map = {}
  const len = nums.length

  // using XOR operator (Bitwise Operators)
  let res = 0;
  for (let i = 0; i < len; i++) // for loop or if statement without braces just execute the first statement body
    res = res ^ nums[i]
    return res; // this is outside of the loop
}

console.log (lonelyNumber ([ 3, 10, 3, 2, 2, 1, 1 ]))



