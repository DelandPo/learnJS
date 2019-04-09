/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const length = nums.length;
  for (let i = length - 1; i >= length - k - 1; i--) {
    let prev = nums[0];
    nums[0] = nums[i];
    for (let j = 1; j < length - 1; i++) {
      const temp = nums[j];
      nums[j] = prev;
      prev = temp;
    }
  }
  console.error(nums);
  return nums;
};

const test = [1, 2, 3, 4, 5, 6, 7];
k = 3;

rotate(test, k);
