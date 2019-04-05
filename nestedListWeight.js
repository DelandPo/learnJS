var depthSum = function(nestedList) {
  return depthSumHelper(nestedList, 1);
};

var depthSumHelper = function(nestedList, depth) {
  let currentValue = 0;
  nestedList.forEach(element => {
    if (Array.isArray(element)) {
      currentValue = currentValue + depthSumHelper(element, depth + 1);
    } else {
      currentValue = currentValue + depth * element;
    }
  });
  console.log(currentValue);

  return currentValue;
};

const testData = [[1, 1], 2, [1, 1]];
console.error(depthSum(testData));
