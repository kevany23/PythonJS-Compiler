/**
 * This file is the file to run to compile a file. You pass in
 * the name of the file as an arg
 */
const FileReader = require('fs');


const args = process.argv;
if (args.length < 3) {
  console.log("Error: No file argument provided.");
  process.exit(1);
}
const fileName = args[2];

FileReader.readFile(fileName, (err, data) => {
  if (err) {
    console.log("Error: File cannot be read.");
    process.exit(1);
  }
  // handle data here
});
