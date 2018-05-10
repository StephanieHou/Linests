const db = require("./connection");


// USERS

// Get All Users
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

module.exports = {
  getAllUsers: getAllUsers,
  getSingleUser: getSingleUser
};
