/**
 * This files contains subclasses for the Node class for
 * the operators supported.
 */
const Ast = require("../ast.js");

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
    //super(Ast.Operator.PLUS, operand);
    this.numOperands = 2;
  }
  generateCode() {
    return this.operand[0].generateCode() + " + "
      + this.operand[1].generateCode();
  }
}

class PrintNode extends Ast.Node {
  constructor(operand) {
    super(Ast.Operator.PRINT, operand);
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

module.exports = {
  PrintNode: PrintNode
}
