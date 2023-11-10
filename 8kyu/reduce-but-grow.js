// ❓ DESCRIPTION:
/* 
Given a non-empty array of integers,
return the result of multiplying the values together in order.
*/

// ✅ SOLUTION:
function grow(x) {
  let result = 1;
  x.forEach((element) => {
    result *= element;
  });
  return result;
}

console.log(grow([1, 2, 3, 4]));
