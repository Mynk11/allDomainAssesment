const axios = require("axios").default;
const CommentModel = require("./model/commentModel");
async function getCommentsData() {
  const data = await axios.get("https://jsonplaceholder.typicode.com/comments");
  const jsonData = JSON.parse(JSON.stringify(data.data));
  let count = await CommentModel.countDocuments();
  if (!count) {
    let resolvedArray = await Promise.all(jsonData);
    await CommentModel.insertMany([...resolvedArray]);
  }
}

module.exports = getCommentsData;
