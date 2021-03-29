/** @format */

const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let name = [];
  members.forEach((element) => {
    if (typeof element !== "string") return false;
    name.push(element.trim().charAt(0).toUpperCase());
  });
  return name.sort().join("");
};
