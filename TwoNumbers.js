const testData = [2, 7, 11, 15];
var twoSum = function(nums, target) {
  const result = [];
  const myNumbers = new Map();
  nums.forEach((element, index) => {
    if (!myNumbers.has(element)) {
      myNumbers.set(element, index);
    }
  });
  nums.forEach((element, index) => {
    const searchElement = target - element;
    if (myNumbers.has(searchElement) && result.length == 0) {
      result.push(index, myNumbers.get(searchElement));
    }
  });
  return result;
};

twoSum(testData, 9);
