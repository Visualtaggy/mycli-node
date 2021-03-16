let fs = require("fs");
let path = require("path");

function isFileOrNot(dirPath) {
  //Check extension
  return fs.lstatSync(dirPath).isFile();
}

function getContent(dirPath) {
  //Content
  return fs.readdirSync(dirPath);
}

function viewFlat(dirPath) {
  //Checking if current dirPath is a file or dir
  let isFile = isFileOrNot(dirPath);

  if (isFile == true) {
    console.log(dirPath);
  } else {
    console.log(dirPath);
    let content = getContent(dirPath);
    console.log(content);

    for (let i = 0; i < content.length; i++) {
      //adding dirPath infront of new path found in the dir
      let childPath = path.join(dirPath, content[i]); //dirPath + "/" + content[i]; (AVODING PLATFORM CONFLICT)
      viewFlat(childPath);
    }
  }
}

//node viewFlat.js "C:\Users\Visua\Desktop\Pepcoding Dev\1_file_system\activity"

module.exports = {
  viewFlatCmd: viewFlat,
};
