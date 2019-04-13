/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const bracket = {
    "(": ")",
    "{": "}",
    "[": "]"
  };
  let counter = 0;
  let prevBrackets = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      prevBrackets.push(s[i]);
      counter++;
    } else {
      const lastBracket = prevBrackets[prevBrackets.length - 1];
      if (s[i] !== bracket[lastBracket]) {
        return false;
      } else {
        prevBrackets.pop();
      }
    }
  }
  return prevBrackets.length === 0 ? true : false;
};

const input = "{(]}";
console.error(isValid(input));
