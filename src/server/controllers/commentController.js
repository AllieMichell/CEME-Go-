const commentsModel = require('../models/comments');

const commentsController = {};

/** @CREATE_NEW_COMMENT */
commentsController.newComment = (req, res) => {
  const newComm = new commentsModel({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    comment: req.body.comment
  });
  newComm.save((err, Comment) => {
    if (err) {
      return res.status(400).json({
        status: false,
        message: 'Couldn´t save the comment',
        err
      });
    }
    return res.status(400).json({
      status: true,
      message: 'Successfull save the comment',
      Comment
    });
  });
};

/** @READ_GET_ALL_LIST_OF_COMMENTS */
commentsController.commentsList = (req, res) => {
  commentsModel.find({}).exec((err, Comments) => {
    if (err) {
      return res.status(400).json({
        status: true,
        message: 'Couldn´t get the list of the users'
      });
    }
    return res.send(Comments);
  });
};

module.exports = commentsController;
