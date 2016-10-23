const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema;
const userSchema = new Schema({
  email: String,
  password: String,
  board: []
});

userSchema.pre('save', function (next) {
  // user model
  const user = this;
  // bcrypt.genSalt(rounds, cb)
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    // bcrypt.hash(data, salt, progress, cb)
    bcrypt.hash(user.password, salt, null, (hashErr, hash) => {
      if (hashErr) {
        return next(hashErr);
      }

      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = (candidatePassword, callback) => {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};

const ModelClass = mongoose.model('terest', userSchema);

module.exports = ModelClass;
