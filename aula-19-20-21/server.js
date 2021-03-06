const express = require('express');
const app = express();
const path = require('path');
const flash = require('flash');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const tweetsRoutes = require('./routes/tweet');
const session = require('express-session');
const passport = require('passport');
require('./passport');


app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "segredo"
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "hjs");
app.use(express.static(path.join(__dirname, 'public')));

app.use(flash());

app.use(passport.initialize());
//necessariamente depois de configurar session
app.use(passport.session());

app.use("/", authRoutes)
app.use("/tweets", tweetsRoutes)
app.listen(3000);
