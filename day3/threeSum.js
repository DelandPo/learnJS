var threeSum = function(nums) {
  if (!nums || nums.length < 3) return [];
  nums = nums.sort((a, b) => a - b);
  let low = 0;
  let hi = nums.length - 1;
  if (nums[low] === 0 && nums[hi] === 0) return [[0, 0, 0]];
  const resultArray = new Map();
  for (let i = 0; i <= nums.length - 2; i++) {
    low = i + 1;
    hi = nums.length - 1;
    while (low < hi) {
      const a = nums[i];
      const b = nums[low];
      const c = nums[hi];
      if (a + b + c === 0) {
        let result = [a, b, c].sort((a, b) => a - b);
        let key = JSON.stringify(result);
        if (!resultArray.has(key)) {
          resultArray.set(key, result);
        }
        low = low + 1;
        hi = hi - 1;
      } else if (a + b + c > 0) {
        hi--;
      } else {
        low++;
      }
    }
  }

  return [...resultArray.values()];
};

function binarySearch(low, hi, num, numbers) {
  while (low <= hi) {
    const mid = parseInt((low + hi) / 2);
    if (numbers[mid] === num) {
      return mid;
    } else if (numbers[mid] < num) {
      low = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return -1;
}

const testData = [0, 0, 0, 0];
console.log(threeSum(testData));
