/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const mySet = new Set();
  for (let i = 0; i < s.length; i++) {
    mySet.add(s[i]);
    console.error(mySet);
  }
  const result = mySet.values().next().value;
  return result ? s.indexOf(result) : -1;
};

const input = "loveleetcode";

console.error(firstUniqChar(input));
