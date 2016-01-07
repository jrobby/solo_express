var usd = require("./USD");
var randomNum = require("./randomNumber");

function appendDom () {
  return "Account Balance: \n$";
}

function randoToUsd () {
  var dollarsToString = usd(randomNum(100,1000000));
  dollarsToString = dollarsToString.toString();
  return dollarsToString;
}

exports.domAppend = appendDom;
exports.finalUsd = randoToUsd;
