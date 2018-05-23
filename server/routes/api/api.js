var express = require("express");
var router = express.Router();

const db = require("../../db/queries");

router.get("/", function (req, res, next) {
  res.send("API");
});

router.get("/interests", db.getAllInterestsInfo);
router.get("/friends", db.getAllFriendsInfo);
router.get("/friends/:userid", db.getFriendsByUser);

module.exports = router;