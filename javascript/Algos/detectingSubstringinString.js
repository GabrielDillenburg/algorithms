function detectSubstring(str, subStr) {
  let j = 0;

  for (i = 0; i < str.length; i++) {
    // if match, compare next character of subStr with next of string
    if (str[i] == subStr[j]) {
      j++;
      if (j == subStr.length) {
        return i - (subStr.length - 1);
      }
    } else {
      i -= j;
      j = 0;

      console.log(i, j)
    }
  }

  return -1;
}

console.log(detectSubstring('gabriel', 'riel'))


// [ G, A, B, R, I, E, L] -> [R, I, E, L]
//        string              substring      
 