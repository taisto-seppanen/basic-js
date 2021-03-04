const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(date) {
  if (date == 0 || date == NaN || typeof date != "string") {
    return false;
  }

  let answer = Math.ceil((1 / (Math.LN2 / 5730)) * Math.log(15 / +date));

  if (answer > 0) {
    return answer;
  } else {
    return false;
  }
};
