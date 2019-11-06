const Operations = require("./ast/operations");

function generate(ast) {
  let buffer = "";
  for (let node of ast) {
    let codeLine = node.generateCode();
    buffer = buffer + codeLine + "\n";
  }
  return buffer;
}

module.exports = {
  generate: generate
}
