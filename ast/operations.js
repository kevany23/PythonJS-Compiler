/**
 * This files contains subclasses for the Node class for
 * the operators supported.
 */
const Ast = require("../ast.js")

class PlusNode extends Ast.Node {
  construtor(operator, operand) {
    super(Ast.Operator.PLUS, operand);
    this.numOperands = 2;
  }
  generateCode() {
    return this.operand[0].generateCode() + " + "
      + this.operand[1].generateCode();
  }
}
