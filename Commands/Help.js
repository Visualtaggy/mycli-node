function helpFunction() {
  console.log(`
    LIST OF ALL THE COMMANDS
    ========================
    node mycli.js help : Shows all the available commands to the user.
    node mycli.js viewtree <path>: Shows the dir in a tree view format.
    node mycli.js viewflat <path>: Shows the dir in a flat view format.
    node mycli.js organize <path>: Organizes files in their respective folders.
    `);
}

module.exports = {
  helpCmd: helpFunction,
};
