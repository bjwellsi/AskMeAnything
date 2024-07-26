const express = require("express");
const logging = require("./Services/logging.js");
const QuestionController = require("./controllers/QuestionController.js");

function start() {
  const app = express();

  const port = 5001;
  app.listen(port);
  logging.logMessage(`listening at port ${port}`);

  app.use(express.json());

  app.use("/ask", QuestionController.ask);
}

module.exports = { start };
