const { viewFlatCmd } = require("./Commands/ViewFlat");
const { viewTreeCmd } = require("./Commands/ViewTree");
const { helpCmd } = require("./Commands/Help");

// Taking input for the user
let input = process.argv.slice(2); // ['CMD','C:/User/Visual/Desktop']

// storing path provided by the user into path variable
let cmd = input[0];
let path = input[1];

// The following functions will be available to use user
// -Help
// -ViewFlat
// -ViewTree
// -Organize
switch (cmd) {
  case "viewflat":
    viewFlatCmd(path);
    break;

  case "viewtree":
    viewTreeCmd(path, "");
    break;

  case "help":
    helpCmd();
    break;

  default:
    console.log("Unknown Command Executed");
    break;
}
