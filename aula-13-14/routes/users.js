var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var db = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'node-course'
  }
});

/* GET users listing. */
router
.use(bodyParser.json())

.get('/', (req, res, next) => {
  db("users").then((users) => {
    if (!users) {
      return res.send(400);
    }
    res.send(users);
  },next)
})

.post('/', (req, res, next) =>{
  db("users")
  .insert(req.body)
  .then((userIds) => {
    res.send(userIds);
  },next)
})

.get('/:id',(req,res,next)=>{
  const {id} = req.params;

  db("users")
  .where('id', id)
  .first()
  .then((users) => {
    if (!users) {
      return res.send(400);
    }
    res.send(users);
  },next)
})

.put('/:id',(req,res,next)=>{
  const {id} = req.params;

  db("users")
  .where('id', id)
  .update(req.body)
  .then((r) => {
    if (r === 0) {
      return res.send(400);
    }
    res.send(200);
  },next)
})

.delete('/:id',(req,res,next)=>{
  const {id} = req.params;

  db("users")
  .where('id', id)
  .delete(req.body)
  .then((r) => {
    if (r === 0) {
      return res.send(400);
    }
    res.send(200);
  },next)
})
;

module.exports = router;
