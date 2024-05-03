const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to prompt user for port number and file path
const promptUser = (callback) => {
  rl.question("Enter the port number for the server: ", (port) => {
    rl.question(
      "Enter the path of the config file containing API information: ",
      (filePath) => {
        callback(port, filePath);
      }
    );
  });
};

module.exports = {
  promptUser,
};
