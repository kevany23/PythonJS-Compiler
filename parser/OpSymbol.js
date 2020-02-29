const Operations = require("../ast/operations");

const Operator = Operations.Operator;

const Closure = {
  CALL: ")",
  PRINT: ")"
};

const Symbols = [
  "+",
  "-",
  "*",
  "/",
  "=",
  ".(",
  "++",
  "--",
  " and ",
  " or ",
  "not ",
  "print",
  '"'
];

function mapSymbolToOperator(sym) {
  switch(sym) {
    case Operator.PRINT:
      return Operations.PrintNode;
    case Operator.ASSIGN:
      return Operations.AssignNode;
    case Operator.PLUS:
      return Operations.PlusNode;
    case Operator.CONSTANT_STRING:
      return Operations.ConstantStringNode;
    case Operator.CONSTANT_NUMBER:
      return Operations.ConstantNumberNode;
    case Operator.VARIABLE_NAME:
      return Operations.VariableNameNode;
    case Operator.MINUS:
      break;
    case Operator.MULTIPLY:
      break;
    case Operator.DIVIDE:
      break;
    case Operator.CALL:
      break;
    case Operator.INCREMENT:
      break;
    case Operator.DECREMENT:
      break;
    case Operator.AND:
      break;
    case Operator.OR:
      break;
    case Operator.NOT:
      break;
  }
}

function findOperators(line) {
  let foundSymbols = [];
  for (let symbol of Symbols) {
    if (line.includes(symbol)) {
      foundSymbols.push(symbol);
    }
  }
  // Case if it's a int value
  if (foundSymbols.length == 0) {
    let intValue = parseInt(line);
    if (Number.isInteger(intValue)) {
      foundSymbols.push(Operator.CONSTANT_NUMBER);
    }
  }
  if (foundSymbols.length == 0) {
    foundSymbols.push(Operator.VARIABLE_NAME);
  }
  return foundSymbols;
}

module.exports = {
  Operator: Operator,
  Closure: Closure,
  findOperators: findOperators,
  mapSymbolToOperator: mapSymbolToOperator
}
