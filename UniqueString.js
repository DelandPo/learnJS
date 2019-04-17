/* Given a string, find out if the string includes all unique characters or not. Could you do it without using any additional data structures */
const assert = require("assert");

const isUnique = str => {
  const myMap = new Map();
  for (let i = 0; i < str.length; i++) {
    const count = myMap.get(str[i]);
    if (count) {
      return false;
    } else {
      myMap.set(str[i], 1);
    }
  }
  return true;
};

assert.equal(isUnique("cba"), true);
assert.equal(isUnique("bbc"), false);
assert.equal(isUnique(""), true);
