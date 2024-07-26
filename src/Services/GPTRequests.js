const log = require("./logging.js");
const openai = require("openai").OpenAI;

async function ask(question, recipientURL) {
  //make the request to that url and return the result
  gpt = new openai();
  const completion = await gpt.chat.completions.create({
    messages: [{ role: "system", content: question }],
    model: recipientURL,
  });

  let response = completion.choices[0];
  log.logMessage(response);

  return response;
}

module.exports = { ask };
