var addBinary = function(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carryOver = 0;
  let result = "";
  while (i >= 0 || j >= 0 || carryOver === 1) {
    const firstElement = i >= 0 ? parseInt(a.charAt(i)) : 0;
    const secondElement = j >= 0 ? parseInt(b.charAt(j)) : 0;
    const sum = carryOver + firstElement + secondElement;
    result = (sum % 2) + result;
    carryOver = parseInt(sum / 2);
    i--;
    j--;
  }
  console.log(result);
  return result;
};

addBinary("1", "1");
