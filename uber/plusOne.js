/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let carryOver = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] + carryOver > 9) {
      digits[i] = 0;
      carryOver = 1;
    } else {
      digits[i] = digits[i] + carryOver;
      carryOver = 0;
    }
  }

  if (carryOver === 1) {
    digits[0] = 0;
    digits = [1, ...digits];
  }
  return digits;
};

const num = [4, 9, 2, 2];

console.error(plusOne(num));
