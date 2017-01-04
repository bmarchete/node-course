const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const Strategy = require('passport-facebook').Strategy;

passport.use(new GitHubStrategy({
  clientID: 'd5df1e68fd35e104eb9f',
  clientSecret: 'bb9c1149af2b4ec3816854891652b3343670a19c',
  callbackURL: "http://127.0.0.1:3000/auth/github/callback"
},
function(accessToken, refreshToken, profile, done) {
  return done(null, profile.username);
}
));

passport.use(new Strategy({
  clientID: '579821695550256',
  clientSecret: 'df18dc935d1cb685ae9266eb85f15220',
  callbackURL: "http://localhost:3000/login/facebook/return"
},
function(accessToken, refreshToken, profile, cb) {
  return cb(null, profile);
}
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;
