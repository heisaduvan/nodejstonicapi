import fetch from "node-fetch";
import crypto from "crypto";
import OAuth   from "oAuth-1.0a";

function main(args) {
    let name = args.name || 'yabancı'
    let greeting = 'Hello ' + name + '!'
    console.log(greeting)
    return {"body": greeting}
  }

exports.main = main
