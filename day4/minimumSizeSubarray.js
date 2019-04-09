/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let sum = nums.reduce((x, y) => x + y, 0);
  let count = nums.length;
  if (nums.length === 0 || sum < s) return 0;
  for (let i = 0; i < nums.length; i++) {
    if (sum - nums[i] < s) {
      return count;
    } else {
      sum = sum - nums[i];
      count--;
    }
  }
};

const nums = [5, 1, 3, 5, 10, 7, 4, 9, 2, 8];
const s = 15;

console.error(minSubArrayLen(s, nums));
