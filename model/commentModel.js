const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
  post: Number, // String is shorthand for {type: String}
  id: Number,
  name: String,
  email: String,
  body: String,
});
module.exports = mongoose.model("Comment", commentSchema);
