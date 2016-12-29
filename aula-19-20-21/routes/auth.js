const express = require('express');
const route = express.Router();
const bodyParser = require('body-parser');
const db = require('../db');
const passport = require('passport');
require('../passport');

route.get('/',(req,res,next)=>{

  res.send({
    session: req.session,
    user: req.user,
    auth: req.isAuthenticated()
  });

});

route.get('/logout',(req,res)=>{
  req.session.destroy((err)=>{
    res.redirect('/');
  });
});

route.get('/login',(req,res)=>{

  res.render('login',{
    error: req.session.flash
  });
});

route.post('/login', passport.authenticate("local",{
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true
}));

route.get('/signup',(req,res)=>{

  res.render('signup',{
    error: req.session.flash
  });
});

//mudar a estrategia de autenticação para receber os dados adicionais
//local-register foi criado por mim mesmo
route.post('/signup', passport.authenticate("local-register",{
  successRedirect: "/",
  failureRedirect: "/signup",
  failureFlash: true
}));

module.exports = route;
