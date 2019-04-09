/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!myMap.has(nums[i])) {
      myMap.set(nums[i], 1);
    } else {
      myMap.set(nums[i], 2);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (myMap.get(nums[i]) === 1) return nums[i];
  }
};
