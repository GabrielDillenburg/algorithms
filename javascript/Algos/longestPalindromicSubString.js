const longestPalindrome = function(s) {
  let longest = '';
  const len = s.length;

  // a a b b a

  for (let i = 0; i < len; i++) {
    // For each character, consider it as the center of a potential palindrome

    // Case 1: Palindrome with odd length
    let left = i;
    let right = i;

    while (left >= 0 && right < len && s[left] === s[right]) {
      // Expand around the center to check if it is a palindrome
      const currentPalindrome = s.substring(left, right + 1);
      if (currentPalindrome.length > longest.length) {
        longest = currentPalindrome;
      }
      left--;
      right++;
    }

    // Case 2: Palindrome with even length
    left = i;
    right = i + 1;

    while (left >= 0 && right < len && s[left] === s[right]) {
      // Expand around the center to check if it is a palindrome
      const currentPalindrome = s.substring(left, right + 1);
      if (currentPalindrome.length > longest.length) {
        longest = currentPalindrome;
      }
      left--;
      right++;
    }
  }

  return longest;
};

console.log(longestPalindrome('aabba'))