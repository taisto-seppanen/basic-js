const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") {
      i++;
    } else if (arr[i] === "--discard-prev") {
      if (i === 0 || arr[i - 2] === "--discard-next") continue;

      answer.pop();
    } else if (arr[i] === "--double-next") {
      if (i === arr.length - 1) continue;

      answer.push(arr[i + 1]);
    } else if (arr[i] === "--double-prev") {
      if (i === 0 || arr[i - 2] === "--discard-next") continue;

      answer.push(arr[i - 1]);
    } else {
      answer.push(arr[i]);
    }
  }

  return answer;
};
