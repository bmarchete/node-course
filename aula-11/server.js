const express = require('express');
const app = express();
const static = __dirname + "/public";

const favicon = require('serve-favicon');
const faviconPath = __dirname + "/public/favicon.png";

const tweets = require('./tweets.js');

app
  .set("views", __dirname + "/views")
  .set("view engine", "hjs")
  .use(express.static(static))
  .use(favicon(faviconPath))

  .get("/teste", (req, res)=>{

    res.render("index",{
      title: "Outro da pagina",
      tweets: tweets
    });


  }).listen(3000);
