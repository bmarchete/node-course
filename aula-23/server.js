const express = require('express');
const app = express();
const path = require('path');
const flash = require('flash');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const session = require('express-session');
const RedisStore = require('connect-redis')(session)

const passport = require('passport');
require('./passport');


app.use(session({
  store: new RedisStore(),
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
app.listen(3000);
