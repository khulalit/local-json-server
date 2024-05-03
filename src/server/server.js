const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const startServer = (port) => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

  return app;
};

module.exports = {
  startServer,
};
