function calculate(amount, nextday) {
  let rushCharge = 0;
  let shipcharge = 0;
  if (nextday === true) {
    rushCharge = 14.5;
  }

  tax = amount * 0.0725;

  if (amount >= 1000) {
    shipcharge = amount * 0.06 + rushCharge;
  } else if (amount >= 200) {
    shipcharge = amount * 0.08 + rushCharge;
  } else if (amount >= 100) {
    shipcharge = 13.25 + rushCharge;
  } else if (amount >= 50) {
    shipcharge = 9.95 + rushCharge;
  } else if (amount >= 25) {
    shipcharge = 7.25 + rushCharge;
  } else {
    shipcharge = 5.25 + rushCharge;
  }
  let total = amount + tax + shipcharge;
  return total;
} //end calculate

console.log("1100, true", calculate(1100, true));
console.log("1100, false", calculate(1100, false));
console.log("210, false", calculate(210, false));
console.log("210, true", calculate(210, true));
console.log("115, true", calculate(115, true));
console.log("115, false", calculate(115, false));
console.log("55, false", calculate(55, false));
console.log("55, true", calculate(55, true));
console.log("35, true", calculate(35, true));
console.log("35, false", calculate(35, false));
console.log("15, true", calculate(15, true));
console.log("15, false", calculate(15, false));
console.log("0, false", calculate(0, false));
console.log("-1100, false", calculate(-1100, false));
