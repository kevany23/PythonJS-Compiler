/**
 * This files contains subclasses for the Node class for
 * the operators supported.
 */
const Ast = require("../ast.js");

const Operator = {
  PLUS: "+",
  MINUS: "-",
  MULTIPLY: "*",
  DIVIDE: "/",
  ASSIGN: "=",
  CALL: ".(",
  INCREMENT: "++",
  DECREMENT: "--",
  AND: " and ",
  OR: " or ",
  NOT: "not",
  PRINT: "print"
};

/**
 * Used for things like loops and function definitions that use
 * code blocks. Has addLine() and
 * @extends Ast
 */
class CodeBlockNode extends Ast.Node {
  constructor(operator, operand) {
    super(operator, operand);
    this.codeBlock = true;
    this.body = [];
  }
  addLine(line) {
    this.body.push(line);
  }
  getCode() {
    return this.body;
  }
}

class PlusNode extends Ast.Node {
  construtor(operator, operand) {
    //super(Operator.PLUS, operand);
    this.numOperands = 2;
  }
  generateCode() {
    return this.operand[0].generateCode() + " + "
      + this.operand[1].generateCode();
  }
}

class PrintNode extends Ast.Node {
  constructor(operand) {
    super(Operator.PRINT, operand);
    this.numOperands = 1;
  }
  generateCode() {
    return 'console.log(' + this.operand + ');';
  }
  static getOperand(line) {
    let idx = line.indexOf("print(");
    if (idx === -1) {
      return -1;
    }
    let idx1 = line.indexOf("(", idx);
    let idx2 = line.indexOf(")", idx1 + 1);
    let operand = line.substring(idx1 + 1, idx2);
    return operand;
  }
}

class AssignNode extends Ast.Node {
  constructor(operand) {
    super(Operator.ASSIGN, operand);
    this.numOperands = 2;
  }
  generateCode() {
    return "var " + this.operand[0] + " = " + this.operand[1] + ";";
  }
  static getOperand(line) {
    let idx = line.indexOf("=");
    if (idx === -1) {
      return -1;
    }
    let variable = line.substring(0, idx);
    let value = line.substring(idx + 1, line.length);
    return [variable, value];
  }
}

module.exports = {
  Operator: Operator,
  PrintNode: PrintNode,
  AssignNode: AssignNode
}
