let fs = require("fs");
let p = require("path");
let ftype = require("./Utils");

function primaryFunction(userInput) {
  var dir = userInput;
  let base_folder = dir;

  // STEP 1
  function createFolder(dirPath) {
    let folderNames = ["Media", "Archives", "Documents", "App", "Others"];
    for (let i = 0; i < folderNames.length; i++) {
      let folderPath = p.join(dirPath, folderNames[i]);
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
      }
    }
  }

  // STEP 2

  function cpyFile(dirPath, destPath) {
    //finding name of OG file
    let fileName = p.basename(dirPath);
    //Creating final desination with file name included since ONLY data is copied thus the fs.copy function needs OG file name
    let finalDestPath = p.join(destPath, fileName);

    fs.copyFileSync(dirPath, finalDestPath);

    console.log("Your files have been organized!");
  }

  function isFileOrNot(dirPath) {
    return fs.lstatSync(dirPath).isFile();
  }

  function getContent(dirPath) {
    return fs.readdirSync(dirPath);
  }

  function getFolderName(dirPath) {
    let allFiles = dirPath.split(".");
    let extensionNames = allFiles.pop();

    for (let key in ftype.typesObject) {
      for (let i = 0; i < ftype.typesObject[key].length; i++) {
        if (ftype.typesObject[key][i] == extensionNames) {
          return key;
        }
      }
    }

    return "Others";
  }

  function organizerFile(dirPath) {
    let isFile = isFileOrNot(dirPath);

    if (isFile == true) {
      let destFolderName = getFolderName(dirPath);
      let destFolderPath = p.join(base_folder, destFolderName);
      cpyFile(dirPath, destFolderPath);
    } else {
      let content = getContent(dirPath);
      for (let i = 0; i < content.length; i++) {
        let contentPath = p.join(dirPath, content[i]);
        organizerFile(contentPath);
      }
    }
  }

  createFolder(dir);
  organizerFile(dir);
}

module.exports = {
  organizeCmd: primaryFunction,
};
