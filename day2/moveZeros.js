/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[counter] = nums[i];
      if (i !== counter) nums[i] = 0;
      counter++;
    }
  }
};

moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([3, 12, 0, 1, 0, 5, 6]);
moveZeroes([30, 12, 1, 1, 0, 0, 0]);
moveZeroes([0, 0, 0, 0, 0, 0]);
moveZeroes([1, 1, 1, 1]);
