/**
 * This file handles the line by line parsing, after the file has been read.
 */

const Ast = require("./ast");
const Operations = require("./ast/operations");

module.exports = {
  parse: parse
}

// First break file into line by line
function parse(lines) {
  let buffer = "";
  console.log("Parsing.");
  let stack = [];
  let currIndentLevel = 0;
  for (let line of lines) {
    console.log(getSpaces(line));
    console.log(line);
    if (line.substr(0,5) === "print") {
      console.log("Print statement detected.");
      let words = line.split(" ")
      console.log(words);
      let print = new Operations.PrintNode(words[1]);
      let c = print.generateCode();
      console.log(c);
      buffer = buffer + c;
    }
  }
  return buffer;
}

/**
 * The current decision is to have the compiler check spaces (for now)
 */
function getSpaces(line) {
  let count = 0;
  for (let i = 0; i < line.length; i++) {
    if (line[i] === ' ') {
      count++;
    }
    else {
      return count;
    }
  }
  return count;
}
