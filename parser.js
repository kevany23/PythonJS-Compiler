/**
 * This file handles the line by line parsing, after the file has been read.
 */

const Ast = require("./ast");
const Operations = require("./ast/operations");
const Util = require("./util");
const LineParser = require("./parser/LineParser");

module.exports = {
  parse: parse
}

// First break file into line by line
function parse(lines) {
  let buffer = "";
  console.log("Parsing...");
  let stack = [];
  let currIndentLevel = 0;
  let indentMap = new Map();

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let indent = getSpaces(line);
    if (indent > 0) {
      // Errors thrown here
      if (indent % 2 === 1) {
        throwCompileError(i + 1, "Indentation Error: Invalid number of spaces.");
      }

      let prev = indentMap.get(indent - 2);
      if (! Util.defined(prev) || ! prev.isCodeBlock()) {
        throwCompileError(i + 1, "Indentation Error: Invalid indent.");
      }
      // Now the indented line should be legit
      // create the AST node and set it in the map
      let node = LineParser.parseLine(line);
      indentMap.set(indent, node);
    }
    else {
      indentMap = new Map();
      let node = LineParser.parseLine(line);
      indentMap.set(indent, node);
    }
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

function throwCompileError(lineNumber, message) {
  console.log("Compiler error at line " + lineNumber + ".");
  console.log(message);
  console.log("Compilation failed.");
  process.exit(1);
}
