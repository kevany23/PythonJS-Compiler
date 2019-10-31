/**
 * This file handles the creating of the AST node from the line string.
 */
const Ast = require("../ast");

function parseLine(line) {
  console.log("Parsing the line");
  return new Ast.Node();
}

module.exports = {
  parseLine: parseLine
}
