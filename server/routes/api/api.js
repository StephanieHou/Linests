var express = require("express");
var router = express.Router();

const db = require("../../db/queries");

router.get("/", function (req, res, next) {
  res.send("API");
});

router.get("/interests", db.getAllInterestsInfo);
router.get("/friends", db.getAllFriendsInfo);
router.get("/friends/:userid", db.getFriendsByUser);
router.get("/chatroom/:userid/:otherid", db.getChatMessages);

router.delete("/interests/:userid", db.deleteInterests);

router.post("/updateinterest", db.editInterests)
router.post("/newfriend", db.addFriend);
router.post("/newinterest", db.addInterest);
router.post("/newmessage", db.addMessages);

module.exports = router;