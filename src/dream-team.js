const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === false || members.length == 0) return false;

  let teamName = [];
  members.forEach((name) => {
    if (typeof name === "string") {
      teamName.push(name.trim()[0].toUpperCase());
    } else {
      return false;
    }
  });
  return teamName.sort().join("");
};
