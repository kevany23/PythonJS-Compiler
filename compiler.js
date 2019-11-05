/**
 * This file is the file to run to compile a file. You pass in
 * the name of the file as an arg
 */
const FileReader = require('fs');
const Parser = require('./parser');
const Generator = require('./generator');

const args = process.argv;
if (args.length < 3) {
  console.log("Error: No file argument provided.");
  process.exit(1);
}
const fileName = args[2];

FileReader.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.log("Error: File cannot be read.");
    process.exit(1);
  }
  console.log("Compiling...")
  // handle data here, split into lines
  let lines = data.split('\n');
  let ast = Parser.parse(lines);
  let compiled = Generator.generate(ast);
  generateFile(compiled);
});

/**
 * Generates the new file from the compilation
 */
function generateFile(data) {
  FileReader.writeFile("compiled.js", data, (err) => {
    if (err) {
      console.log("File write err");
    }
  });
}
