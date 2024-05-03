const fs = require("fs");

// Function to load JSON data from a file
const loadConfigFile = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading JSON from file:", err);
    return null;
  }
};

module.exports = {
  loadConfigFile,
};
