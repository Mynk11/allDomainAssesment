var express = require("express");
var router = express.Router();
const CommentModel = require("../model/commentModel");
/* GET home page. */
router.get("/me", async function (req, res, next) {
  console.log("data=======>", req.url);
  //const data = await CommentModel.find({});
  //res.render('index', { title: 'Express' });
  //console.log("data=======>", data);
  res.send({ data: "data" });
});

module.exports = router;
