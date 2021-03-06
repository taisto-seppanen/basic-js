const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let season = {
    1: "winter",
    11: "winter",
    0: "winter",
    2: "spring",
    3: "spring",
    4: "spring",
    5: "summer",
    6: "summer",
    7: "summer",
    8: "autumn",
    9: "autumn",
    10: "autumn",
  };

  if (date == null) {
    return "Unable to determine the time of year!";
  }

  if (
    Object.prototype.toString.apply(date) !== "[object Date]" ||
    isNaN(date)
  ) {
    throw new Error();
  }

  let actualMonth = season[date.getMonth()];
  return actualMonth;
};
