function isPalindrome(str) {

  //validate if is a alphabetical char
  function isCharLetter(char) {
    if (typeof char !== 'string') {
      return false;
    }
    return /^[a-zA-Z]+$/.test(char);
  }
  
  const len = str.split('').length -1
  const res = []
  for (let i=0, j=len; i <= len; i++, j--) {
    if (isCharLetter(str[i])) {
      if (str[i] !== str[j]) {
        return false
      }
    }
  }

  return true
}


console.log(isPalindrome('raccxxecar'))