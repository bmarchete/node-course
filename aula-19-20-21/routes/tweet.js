const express = require('express');
const route = express.Router();
const db = require('../db');
const authorization = require('../middleware/authorization');

route.use(authorization.loginReq);

route.get('/',  authorization.admReq,(req,res,next)=>{
  db("tweets").then((tweets) => {
    res.send(tweets);
  },next);

});

route.get('/user/:id', (req,res,next)=>{
  const {id} = req.params;
  db("tweets")
    .where("user_id", id)
    .then((tweets) => {
      res.send(tweets);
    },next);

});

route.get('/delete/:id',  (req,res,next)=>{
  const id = req.params.id;

  db("tweets")
    .where("id", id)
    .andWhere("user_id", req.user.id)
    .delete()
    .then((result) => {
      if(result === 0){
        return res.send("Não é possível apagar este tweet");
      }
      res.sendStatus(200);
    },next);
});

module.exports = route;
