/** @format */

const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (arguments.length == 0) {
    return "Unable to determine the time of year!";
  }
  if (Object.prototype.toString.call(date) != "[object Date]") {
    throw "Error";
  }
  let month = date.getMonth();
  let season;
  if (month == 11 || (month <= 1 && month >= 0)) return (season = "winter");
  if (month >= 2 && month <= 4) return (season = "spring");
  if (month >= 5 && month <= 7) return (season = "summer");
  if (month >= 8 && month <= 10) return (season = "autumn");

  return season;
};
