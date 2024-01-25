const isBeautifulString = (inputString) => {
  const alphabet = [];
  
  for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
    alphabet.push(String.fromCharCode(i));
  }

  console.log(alphabet)
  
  const letters = Array(alphabet.length).fill(0);

  console.log(letters)

  
  for (let letter of inputString) {
    letters[alphabet.indexOf(letter)]++;
  }

  console.log(letters)

  
  for (let i = 0; i < letters.length; i++) {
    console.log(letters[i], letters[i+1])
    if (letters[i + 1] > letters[i]) { return false; }
  }
  
  return true;
};

console.log(
  isBeautifulString('bbc') === true
);