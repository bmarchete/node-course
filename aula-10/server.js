const express = require('express');
const app = express();
const static = __dirname + "/public";

const favicon = require('serve-favicon');
const faviconPath = __dirname + "/public/favicon.png";


app
  .use(express.static(static))
  .use(favicon(faviconPath))
  .get("/profile", (req, res)=>{
    let profile = {
      name: "binho"
    };

    res.send(profile);


  }).listen(3001);
