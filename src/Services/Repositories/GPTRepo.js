const mongoClient = require("mongodb").MongoClient;

async function getConnection() {
  var url = "mongodb://localhost:27017/GPTCaller";
  let client = await mongoClient.connect(url);
  return client.db().collection("gpts");
}

async function getGPTByName(name) {
  var con = await getConnection();
  let query = { name: name };
  return await con.findOne(query);
}

module.exports = { getGPTByName };
