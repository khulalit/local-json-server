const { promptUser } = require("./src/inputHandler/inputHandler");
const { loadConfigFile } = require("./src/readFile/fileHandler");
const { generateRoutes } = require("./src/routes/routeGenerator");
const { startServer } = require("./src/server/server");

let PORT = 8080;

promptUser((port, filePath) => {
  PORT = port;
  const routes = loadConfigFile(filePath);
  const app = startServer(PORT);
  generateRoutes(app, routes);
});
