const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if (Array.isArray(members) === false || members.length == 0) {
    return false;
  }

  let abbreviationArray = [];

  members.forEach((name) => {
    if (typeof name === "string") {
      abbreviationArray.push(name.trim()[0].toUpperCase());
    } else {
      return false;
    }
  });
  return abbreviationArray.sort().join("");
};
