const fetch = require("node-fetch");
const crypto = require("crypto");
const OAuth = require("oAuth-1.0a");

function main(args) {
  let name = args.name || "yabancı";
  let greeting = "Hello " + name + "!";
  console.log(greeting);
  return { body: greeting };
}

exports.main = main;
