const userModel = require('../models/user');

const userController = {};

// USER CRUD
/** @CREATE new user */
userController.newUser = (req, res) => {
  const newUser = new userModel({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });
  newUser.save((err, User) => {
    if (err) {
      return res.status(400).json({
        status: false,
        message: 'Couldn´t save new user',
        err
      });
    }
    return res.status(200).json({
      status: true,
      message: 'Successfully save new user',
      User
    });
  });
};
/** @READ get all the list of users */
userController.userList = (req, res) => {
  userModel.find({}).exec((err, Users) => {
    if (err) {
      res.status(400).json({
        status: false,
        message: 'Couldn´t get list of users',
        err
      });
    }
    // res.status(200).json({
    //   // status: true,
    //   // message: 'Successfully get list of users',
    //   Users
    // });
    res.send(Users);
  });
};

/** @UPDATE one of my list of users */
userController.updateUser = (req, res) => {
  const updateUsr = {
    name: req.body.name,
    username: req.body.username,
    email: req.body.username,
    password: req.body.password
  };
  userModel.updateOne({ _id: req.body._id }, updateUsr, (err) => {
    if (err) {
      return res.status(400).json({
        status: false,
        message: 'Culdn´t update this user',
        err
      });
    }
    return res.status(200).json({
      status: true,
      message: 'Successfully update this user'
    });
  });
};

/** @DELETE one user of my list of users */
userController.deleteUser = (req, res) => {
  userModel.findByIdAndRemove({ _id: req.params._id }, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        status: false,
        message: 'Couldn´t delete this user',
        err
      });
    }
    return res.status(200).json({
      status: true,
      message: 'Successfully delete this user'
    });
  });
};

/** @SPECIAL_FUNCTIONS_OF_USERS_LIST */

/** @FIND_BY_ID */
userController.findID = (req, res) => {
  userModel.findById({ _id: req.params._id }, (err, User) => {
    if (err) {
      return res.status(400).json({
        status: false,
        message: 'Couldn´t find this user by the id',
        err
      });
    }
    return res.status(200).json({
      status: true,
      message: 'Successfully find this user by the id',
      User
    });
  });
};

/** @FIND_BY_USERNAME */
userController.findNAME = (req, res) => {
  userModel.findOne({ username: req.params.username }, (err, User) => {
    if (err) {
      return res.status(400).json({
        status: false,
        message: 'Couldn´t find user by the name',
        err
      });
    }
    return res.status(200).json({
      status: true,
      message: 'Successfully find user by the name',
      User
    });
  });
};

module.exports = userController;
