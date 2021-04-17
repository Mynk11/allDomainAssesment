var express = require("express");
var router = express.Router();
const CommentModel = require("../model/commentModel");
/* GET home page. */
router.get("/comments", async function (req, res, next) {
  const data = await CommentModel.find({});
  res.send(data);
});

module.exports = router;
