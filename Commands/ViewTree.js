let fs = require("fs");
let p = require("path");
function isFileOrNot(dirPath) {
  return fs.lstatSync(dirPath).isFile();
}

function getContent(dirPath) {
  //Content
  return fs.readdirSync(dirPath);
}

function viewTree(dirPath, indent) {
  let isFile = isFileOrNot(dirPath);

  if (isFile == true) {

    //BAD OLD METHOD
    // SPLITING BASED ON SEPRATOR \
    // let dirNameArr = dirPath.split("\\");
    // // REMOVING THE LAST ELEMENT FROM THE ARRAY SINCE THAT IS THE DIR WE NEED
    // let nameDirOnly = dirNameArr.pop();

    console.log(indent, p.basename(dirPath) + "*");
  } else {
    // let dirNameArr = dirPath.split("\\");
    // let nameDirOnly = dirNameArr.pop();

    console.log(indent, p.basename(dirPath));

    let content = getContent(dirPath);
    // console.log(indent, content);

    for (let index = 0; index < content.length; index++) {
      let contentPath = dirPath + "\\" + content[index];
      viewTree(contentPath, indent + "\t");
    }
  }
}

module.exports = {
  viewTreeCmd: viewTree,
};
