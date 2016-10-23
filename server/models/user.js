const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: String,
  password: String,
  board: []
});

userSchema.pre('save', function (next) {
  // user model
  const user = this;
  // bcrypt.genSalt(rounds, cb)
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }
    // bcrypt.hash(data, salt, progress, cb)
    bcrypt.hash(user.password, salt, null, function (hashErr, hash) {
      if (hashErr) {
        return next(hashErr);
      }
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};

const ModelClass = mongoose.model('bookterest', userSchema);

module.exports = ModelClass;
