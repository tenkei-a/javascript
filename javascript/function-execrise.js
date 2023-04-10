"use strict";

// function
function price(unitPrice, n) {
  return unitPrice * n;
}

// function-literal
// const price = function (unitPrice, n) {
//   return unitPrice * n;
// };

// function-constract
// const price = new Function("unitPrice","n","return unitPrice * n");

// function-arrow
// const price = (unitPrice,n) => {
//     return unitPrice * n;
// }

console.log(price(100, 13));
