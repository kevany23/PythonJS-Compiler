/**
 * This is the main interface file for the AST
 */

// Enum for Operators
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

/**
 * Node item for Abstract syntax tree. This class is meant to be fairly bare-
 * bones as many operators extend this class to suit their number of
 * operands and how their code is generated.
 * The basic fields of this class are:
 * operator - the operation specified
 * operand - can be one operand or a list of multiple operands depending on
 *    subclass. The subclass determines the ordering.
 * block - if the operator contains a code block to execute on, like a loop
 *  or function definition
 */
class Node {
  constructor(operator, operand) {
    this.operator = operator;
    this.operand = operand;
    this.codeBlock = false;
  }
  operator() {
    return this.operator;
  }
  operand() {
    return this.operand;
  }
  isCodeBlock() {
    return this.codeBlock;
  }
  generateCode() {
  }
  static getOperand(line) {
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
      compiled.push(instr.generateCode());
    }
    return compiled;
  }
}

module.exports = {
  Node: Node,
  Ast: Ast,
  Operator: Operator
}
