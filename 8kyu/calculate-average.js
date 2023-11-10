// ❓ DESCRIPTION:
/* 
Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0.
*/

// ✅ SOLUTION:
function findAverage(array) {
  // your code here
  if (array.length === 0) return 0;
  let sum = 0;
  array.forEach((el) => {
    sum += el;
  });
  return sum / array.length;
}
