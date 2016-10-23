const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../../config/config');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function (req, res, next) {
  // user auth'd. give them a token
  res.send({ token: tokenForUser(req.user) });
};

exports.signup = function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  if (!username || !password) {
    return res.status(422).send({ error: 'You must provide username and password' });
  }

  User.findOne({ username: username }, function (err, existingUser) {
    if (err) {
      return next(err);
    }
    if (existingUser) {
      return res.status(422).send({ error: 'Username is in use' });
    }
    const user = new User({
      username: username,
      password: password
    });
    user.save(function (saveErr) {
      if (err) {
        return next(saveErr);
      }
      res.json({ token: tokenForUser(user)});
    });
  });
};
