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

module.exports = {
  getAllUsers: getAllUsers,
  getSingleUser: getSingleUser,
  getAllInterestsInfo: getAllInterestsInfo,
  getAllFriendsInfo: getAllFriendsInfo,
  getFriendsByUser: getFriendsByUser
};
