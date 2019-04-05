/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (!s) return true;
  let lo = 0;
  let hi = s.length - 1;
  s = s.toLowerCase();
  while (lo < hi) {
    if (isAlphanumeric(s[lo]) && isAlphanumeric(s[hi])) {
      console.log(s[lo], s[hi]);
      if (s[lo] === s[hi]) {
        lo++;
        hi--;
      } else return false;
    } else if (isAlphanumeric(s[lo])) {
      hi--;
    } else {
      lo++;
    }
  }
  return true;
};

function isAlphanumeric(char) {
  return (
    (("a" <= char && char <= "z") || (0 <= char && char <= 9)) && char !== " "
  );
}

const test = "A man, a plan, a canal: Panama";

console.log(isPalindrome(test));
// console.log(isAlphanumeric(" "));
