/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let low = 0;
  let high = s.length - 1;
  let skippedCharacter = false;

  if (s.length <= 2) return true;
  else return isPalindrome(s, low, high, skippedCharacter);
};

function isPalindrome(s, start, end, skippedCharacter) {
  if (start > end) return true;
  else if (s[start] === s[end]) {
    return isPalindrome(s, start + 1, end - 1, skippedCharacter);
  } else if (!skippedCharacter) {
    skippedCharacter = true;
    return (
      isPalindrome(s, start + 1, end, skippedCharacter) ||
      isPalindrome(s, start, end - 1, skippedCharacter)
    );
  } else {
    return false;
  }
}
