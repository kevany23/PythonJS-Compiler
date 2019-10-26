/**
 * This is the main interface file for the AST
 */

// Enum for Operators
const Operator = {
  PLUS: "plus",
  MINUS: "minus",
  MULTIPLY: "multiply",
  DIVIDE: "divide",
  ASSIGN: "assign",
  CALL: "call",
  INCREMENT: "increment",
  DECREMENT: "decrement",
  AND: "and",
  OR: "or",
  NOT: "not",
  PRINT: "print"
};

/**
 * Node item for Abstract syntax tree. This class is meant to be fairly bare-
 * bones as many operators extend this class to suit their number of
 * operands and how their code is generated.
 * The basic fields of this class are:
 * operator - the operation specified
 * operand - can be one operand or a list of multiple operands depending on
 *    subclass. The subclass determines the ordering.
 */
class Node {
  constructor(operator, operand) {
    this.operator = operator;
    this.operand = operand;
  }
  operator() {
    return this.operator;
  }
  operand() {
    return this.operand;
  }
  generateCode() {
  }
}

class Ast {
  constructor() {
    this.instructions = [];
  }
  addInstruction(instr) {
    this.instructions.push(instr);
  }
  generateCode() {
    let compiled = [];
    for (let instr of instructions) {
      compiled.push(instr.generateCode);
    }
    return compiled;
  }
}

module.exports = {
  Node: Node,
  Ast: Ast,
  Operator: Operator
}
