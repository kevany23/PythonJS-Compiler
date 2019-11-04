const Operations = require("../ast/operations");

const Operator = {
  PLUS: "+",
  MINUS: "-",
  MULTIPLY: "*",
  DIVIDE: "/",
  ASSIGN: "=",
  CALL: ".(",
  INCREMENT: "++",
  DECREMENT: "--",
  AND: "and",
  OR: "or",
  NOT: "not",
  PRINT: "print"
};

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
      console.log("mapped");
      console.log(Operations.PrintNode);
      return Operations.PrintNode;
    case Operator.PLUS:
      break;
    case Operator.MINUS:
      break;
    case Operator.MULTIPLY:
      break;
    case Operator.DIVIDE:
      break;
    case Operator.ASSIGN:
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
      console.log("FOUND SYMBOL");
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
