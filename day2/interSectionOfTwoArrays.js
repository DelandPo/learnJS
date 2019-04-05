var intersect = function(nums1, nums2) {
  if (nums1.length === 0 || nums2.length === 0) return [];
  const myMap = new Map();
  const resultArray = [];
  for (let i = 0; i < nums1.length; i++) {
    const result = myMap.get(nums1[i]);
    const value = result ? result + 1 : 1;
    myMap.set(nums1[i], value);
  }
  for (let i = 0; i < nums2.length; i++) {
    const result = myMap.get(nums2[i]);
    let occurence = result ? result : 0;
    if (occurence > 0) {
      resultArray.push(nums2[i]);
      occurence === 1
        ? myMap.delete(nums2[i])
        : myMap.set(nums2[i], occurence - 1);
    }
  }
};

const nums1 = [3, 4, 2, 5, 5, 5, 5, 2];
const nums2 = [3, 2, 5, 5, 1, 9];

intersect(nums1, nums2);
