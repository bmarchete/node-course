const express = require('express');

exports.loginReq = function(req,res,next) {
  if (!req.isAuthenticated()) {

    return res.redirect('/');
  }
  next();
};

exports.admReq = function (req,res,next) {
  if (!req.user.admin) {

    return res.send("Forbiden 403");
  }
  next();
};
