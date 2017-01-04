const express = require('express');
const route = express.Router();
const bodyParser = require('body-parser');
const db = require('../db');
const passport = require('passport');
const cache = require('express-redis-cache')();
require('../passport');

route.get('/',(req,res,next)=>{

  res.send({
    session: req.session,
    user: req.user,
    auth: req.isAuthenticated()
  });

});

//cria cache para esta rota usando redis
route.get('/testCache', cache.route({expire: 10}), (req,res,next)=>{

    setTimeout(()=>{
    const user = {
      name: "user ",
      email: "email @email.com",
      password: "123"
    };

    res.send(user);
  }, 5000);


});

route.get('/login',(req,res)=>{

  res.render('login',{
    error: req.session.flash
  });
});

route.get('/logout',(req,res)=>{
  req.session.destroy((err)=>{
    res.redirect('/');
  });
});

route.post('/login', passport.authenticate("local",{
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true
}));

module.exports = route;
