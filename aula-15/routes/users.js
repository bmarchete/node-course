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

      res.render("index",{
        title: "Usuários",
        users
      });
    },next)
  })

  .get('/:id/tweets', (req, res, next) => {
    const {id} = req.params

    db("tweets")
      .where("user_id", id)
      .then((tweets) => {

        res.render("tweets",{
          title: "Tweets",
          tweets,
          user: id
        });
      },next)
  })
;

module.exports = router;
