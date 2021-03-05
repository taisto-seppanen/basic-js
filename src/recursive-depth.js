const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 0;
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        let actual = this.calculateDepth(item);
        if (actual > count) {
          count = actual;
        }
      }
    });
    return count + 1;
  }
};
