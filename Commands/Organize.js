let fs = require("fs");
let p = require("path");

//TEMP CODE
let input = process.argv.slice(2);
var dir = input[0];

function createFolder(dirPath) {
  let folderNames = ["Media", "Archieves", "Documents", "App"];
  for (let i = 0; i < folderNames.length; i++) {
    let folderPath = p.join(dirPath, folderNames[i]);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }
  }
}

createFolder(dir);
