const testData = [2, 7, 11, 15];
var twoSum = function(nums, target) {
  if (nums.length === 0) {
    console.log("here");
    return [];
  }
  const myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const b = target - nums[i];
    if (myMap.has(b)) {
      console.log("here");
      return [i, myMap.get(b)];
    } else {
      console.log("here");
      myMap.set(nums[i], i);
    }
  }

  return [];
};

console.error(twoSum(testData, 9));
