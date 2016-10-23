const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');
const Board = require('./controllers/board');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
  // Auth
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);

  // Board
  app.post('/addpin', requireAuth, Board.addpin);
  app.post('/deletepin', requireAuth, Board.deletepin);
  app.get('/fetchboard', requireAuth, Board.fetchboard);
};
