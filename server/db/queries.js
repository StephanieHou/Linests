const db = require("./connection");

//USERS

//
function getAllUsers(req, res, next) {
  db
    .any("SELECT * FROM users")
    .then(function (data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL users"
      });
    })
    .catch(function (err) {
      return next(err);
    });
}

//Get Single User
function getSingleUser(req, res, next) {
  const username = req.params.username;
  var newuser = username.replace(/"/g, "'");
  db
    .any("SELECT * FROM users WHERE users.username=$1", newuser)
    .then(function (data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: newuser
      });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getAllInterestsInfo(req, res, next) {
  db
    .any(`SELECT users.user_id, users.username, users.first_name, users.last_name, users.about, users.gender, 
    users.city, users.state, users.education, users. birthyear, interests.passion
    FROM users JOIN interests ON users.user_id=interests.user_id `)
    .then(function (data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL interests"
      });
    })
    .catch(function (err) {
      return next(err);
    });
}

function addInterest(req, res, next) {
  console.log(req.body)
  db
    .none(
      "INSERT INTO interests (user_id, passion) VALUES( ${user_id}, ${passion})",
      {
        user_id: req.body.user_id,
        passion: req.body.passion
      })
    .then(function (data) {
      res
        .status(200)
        .json({
          status: "success",
          data: data,
          message: "Added Interest"
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


function deleteInterests(req, res, next) {
  const userid = req.params.userid;
  db.any('DELETE FROM interests WHERE interests.user_id=$1',
    [userid]
  )
    .then(function (data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Delete All Interests"
      });
    })
    .catch(function (err) {
      return next(err);
    });
}


function addFriend(req, res, next) {
  console.log(req.body)
  db
    .none(
      "INSERT INTO friends (user_id, added_id) VALUES( ${user_id}, ${added_id})",
      {
        user_id: req.body.user_id,
        added_id: req.body.added_id
      })
    .then(function (data) {
      res
        .status(200)
        .json({
          status: "success",
          data: data,
          message: "Added Friend"
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getAllFriendsInfo(req, res, next) {
  db
    .any("SELECT * FROM friends")
    .then(function (data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL friends"
      });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getFriendsByUser(req, res, next) {
  const userid = parseInt(req.params.userid);
  db
    .any(
      `SELECT users.user_id, users.username, users.first_name, users.last_name, users.about, users.gender, 
      users.city, users.state, users.education, users. birthyear
       FROM users JOIN friends ON users.user_id=friends.added_id 
        WHERE friends.user_id=$1`,
      userid
    )
    .then(function (data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL Friends By User Information"
      });
    })
    .catch(function (err) {
      return next(err);
    });
}

function editInterests(req, res, next) {
  const userid = req.body.user_id
  return
  db
    .none(
      "UPDATE interests  SET user_id=$1,passion=$2 WHERE interests.user_id=$3", [
        userid,
        req.body.passion,
        userid
      ]
    )
    .then(data => {
      res.json("success");
    })
    .catch(error => {
      res.json(error);
    });
}

function getChatMessages(req, res, next) {
  const userid = parseInt(req.params.userid);
  const otherid = parseInt(req.params.otherid);
  db
    .any(
      `SELECT users.user_id, users.username, users.first_name, users.last_name, chatroom.messages
       FROM users JOIN chatroom ON users.user_id=chatroom.otheruser_id 
        WHERE (chatroom.user_id=$1 AND chatroom.otheruser_id=$2) OR (chatroom.user_id=$2 AND chatroom.otheruser_id=$1)`,
      [userid, otherid]
    )
    .then(function (data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved Chat Messages"
      });
    })
    .catch(function (err) {
      return next(err);
    });
}

function addMessages(req, res, next) {
  console.log(req.body)
  db
    .none(
      "INSERT INTO chatroom (user_id, otheruser_id, messages) VALUES( ${user_id}, ${otheruser_id}, $(messages))",
      {
        user_id: req.body.user_id,
        otheruser_id: req.body.otheruser_id,
        messages: req.body.messages
      })
    .then(function (data) {
      res
        .status(200)
        .json({
          status: "success",
          data: data,
          message: "Added Message"
        });
    })
    .catch(function (err) {
      return next(err);
    });
}



module.exports = {
  getAllUsers: getAllUsers,
  getSingleUser: getSingleUser,
  getAllInterestsInfo: getAllInterestsInfo,
  addInterest: addInterest,
  deleteInterests: deleteInterests,
  editInterests: editInterests,
  addFriend: addFriend,
  getAllFriendsInfo: getAllFriendsInfo,
  getFriendsByUser: getFriendsByUser,
  getChatMessages: getChatMessages,
  addMessages: addMessages
};
