/**
 * This file handles the creating of the AST node from the line string.
 */
const Ast = require("../ast");
const OpSymbol = require("./OpSymbol");

function parseLine(line) {
  let node = createNode(line);
  return node;
}

/*
Now every line needs at least one operator (as of current implementation).
We use this fact to parse the line.
 */


function getOperator(line) {
  //console.log(line);
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
  let node = new operator(operand);
  return node;
}

// TODO: work on building the AST for printnodes
function createNode(line) {
  let operator = getOperator(line);
  let node = getOperand(line, operator);
  if (node.hasNesting) {
    // handle subnodes
    let operand = node.operand;
    for (let text of operand) {
      createNode(text);
    }
  }
  return node;
}

module.exports = {
  parseLine: parseLine
}
