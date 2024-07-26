const gpt = require("../Services/GPTRequests.js");
const gptRepo = require("../Services/Repositories/GPTRepo.js");

function ask(req, res) {
  question = req.query.question;

  targetGPTURL = gptRepo.getGPTByName(req.query.who).url;
  let answer = gpt.ask(question, targetGPTURL);
  res.status(200).send(answer);
}

module.exports = { ask };
