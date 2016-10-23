const User = require('../models/user');

exports.addpin = function (req, res) {
  User.findByIdAndUpdate(req.user._id, { $push: { board: req.body.add } }, function (err, saved_doc) {
    if (err) {
      console.log('Add error', err);
    }
    else {
      res.send({ message: 'Pin Added', level: 'success' });
    }
  });
};

exports.deletepin = function (req, res) {
  User.update({ _id: req.user._id }, { $pull: { board: { id: req.body.delete } } }, function (err, doc) {
    if (err) {
      console.log('Delete error', err);
    }
    else {
      res.send({ message: 'Pin Deleted', level: 'success' });
    }
  });
};

exports.fetchboard = function (req, res) {
  User.findOne({ id: req.body.id }, function (err, result) {
    if (err) {
      console.log('Fetch Error', err);
      res.send({ message: 'Server error fetching board', level: 'error' });
    }
    else {
      res.send(result.board);
    }
  });
};
