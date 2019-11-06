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
  "print"
];

function mapSymbolToOperator(sym) {
  switch(sym) {
    case Operator.PRINT:
      return Operations.PrintNode;
    case Operator.ASSIGN:
      return Operations.AssignNode;
    case Operator.PLUS:
      break;
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
  return foundSymbols;
}

module.exports = {
  Operator: Operator,
  Closure: Closure,
  findOperators: findOperators,
  mapSymbolToOperator: mapSymbolToOperator
}
