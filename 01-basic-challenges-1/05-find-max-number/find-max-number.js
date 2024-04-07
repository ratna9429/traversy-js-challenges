//Using For loop
// function findMaxNumber(arr) {
//   let maxNum = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxNum) {
//       maxNum = arr[i];
//     }
//   }

//   return maxNum;
// }

//Using Math
function findMaxNumber(arr) {
  return Math.max(...arr);
}

module.exports = findMaxNumber;
