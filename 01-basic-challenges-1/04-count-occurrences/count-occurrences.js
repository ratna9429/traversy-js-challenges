// Solution using for loop
// function countOccurrences(str, char) {
//   let count = 0;
//   for (let i in str) {
//     if (str[i] === char) {
//       count++;
//     }
//   }

//   return count;
// }

// Solution using split method
function countOccurrences(str, char) {
  return str.split(char).length - 1;
}

module.exports = countOccurrences;
