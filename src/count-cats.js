const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if (matrix.length == 0) {
    return 0;
  }

  let count = 0;

  for (let array of matrix) {
    for (let item of array) {
      if (item === "^^") {
        count++;
      }
    }
  }

  return count;
};
