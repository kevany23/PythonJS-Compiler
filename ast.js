// Enum for Operators
export const Operator = {
  PLUS: "plus",
  MINUS: "minus",
  MULTIPLY: "multiply",
  DIVIDE: "divide",
  ASSIGN: "assign",
  CALL: "call",
  INCREMENT: "increment",
  DECREMENT: "decrement",
  AND: "and",
  OR: "or"
  NOT: "not",
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
export class Node {
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
