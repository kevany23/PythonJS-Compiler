const Operations = require("./ast/operations");

function generate(ast) {
  console.log("Generator called");
  console.log(ast);
  let buffer = "";
  for (let node of ast) {
    let codeLine = node.generateCode();
    buffer = buffer + codeLine;
  }
  return buffer;
}

module.exports = {
  generate: generate
}
