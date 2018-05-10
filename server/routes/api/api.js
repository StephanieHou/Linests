var express = require("express");
var router = express.Router();

const db = require("../../db/queries");

router.get("/", function (req, res, next) {
  res.send("API");
});

module.exports = router;