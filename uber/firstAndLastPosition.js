/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const lo = 0;
  const hi = nums.length - 1;
  if (nums.length === 0) return [-1, -1];
  return binarySearch(lo, hi, nums, target);
};

function binarySearch(lo, hi, nums, target) {
  while (lo <= hi) {
    const mid = parseInt((lo + hi) / 2);
    if (nums[mid] === target) {
      return [
        findLeftRange(nums, mid, target),
        findRightRange(nums, mid, target)
      ];
    } else if (nums[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return [-1, -1];
}

function findLeftRange(nums, index, target) {
  for (let i = index - 1; i >= 0; i--) {
    if (nums[i] !== target) return i + 1;
  }
  return nums[0] === target ? 0 : -1;
}

function findRightRange(nums, index, target) {
  for (let i = index + 1; i < nums.length; i++) {
    if (nums[i] !== target) return i - 1;
  }
  return nums[nums.length - 1] === target ? nums.length - 1 : -1;
}

nums = [1];
target = 1;

console.error(searchRange(nums, target));
