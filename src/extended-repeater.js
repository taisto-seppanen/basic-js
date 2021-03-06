const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatTimes = options.repeatTimes == undefined ? 1 : options.repeatTimes;
  let separator = options.separator == undefined ? "+" : options.separator;
  let addition = options.addition == undefined ? "" : options.addition;
  let additionRepeatTimes =
    options.additionRepeatTimes == undefined ? 1 : options.additionRepeatTimes;
  let additionSeparator =
    options.additionSeparator == undefined ? "|" : options.additionSeparator;

  let array = [];

  for (let i = 0; i < repeatTimes; i++) {
    array.push(str);
    for (let j = 0; j < additionRepeatTimes; j++) {
      if (j == additionRepeatTimes - 1) array.push(addition + separator);
      else array.push(addition + additionSeparator);
    }
  }
  let answer = array.join("");
  return answer.slice(0, -separator.length);
};
