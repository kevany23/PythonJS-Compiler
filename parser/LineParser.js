/**
 * This file handles the creating of the AST node from the line string.
 */
const Ast = require("../ast");
const OpSymbol = require("./OpSymbol");

function parseLine(line) {
  console.log("Parsing the line");
  console.log(line);
  let op = getOperator(line);
  let opnd = getOperand(line, op);
  console.log(opnd);
  return new Ast.Node();
}

/*
Now every line needs at least one operator (as of current implementation).
We use this fact to parse the line.
 */


function getOperator(line) {
  let op = OpSymbol.findOperators(line);
  return op;
}

/**
 * Given the line and the operator that's already found, find its operands
 * @param  {[type]} line [description]
 * @param  {[type]} op   [description]
 * @return {[type]}      [description]
 */
function getOperand(line, op) {
  let operator = OpSymbol.mapSymbolToOperator(op[0]);
  let operand = operator.getOperand(line);
}

// TODO: work on building the AST for printnodes
function createNode() {

}

module.exports = {
  parseLine: parseLine
}
