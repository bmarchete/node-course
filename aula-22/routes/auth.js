const express = require('express');
const router = express.Router();
const passport = require('../passport');


router.get('/', function(req, res, next) {
  res.send({message: "done"});
});

router.get('/fail', function(req, res, next) {
  res.send({message: req.session});
});

router.get('/loginGithub', function(req, res, next) {
  res.redirect('/auth/github');
});

router.get('/loginFacebook', function(req, res, next) {
  res.redirect('/auth/facebook');
});

router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});



router.get('/home', function(req, res, next) {
  res.send({
    message: "done with auth " + req.session.tipo,
    session: req.session,
    auth: req.isAuthenticated()
  });
});

router.get('/auth/github',
passport.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/auth/github/callback',
passport.authenticate('github', { failureRedirect: '/fail' }),
function(req, res) {
  // Successful authentication, redirect home.
  req.session.tipo = "github";

  res.redirect('/home');
});



router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/login/facebook/return',
  passport.authenticate('facebook', { failureRedirect: '/fail' }),
  function(req, res) {
    res.redirect('/home');
  });

module.exports = router;
