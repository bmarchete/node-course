const app = require('express')();
//const router = require('./router');

const session = require('express-session');

//app.use('/', router).listen(3001);
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "segredo"
}));

app.get('/',(req,res)=>{
    res.send(req.session);
});

app.get('/set',(req,res)=>{
    req.session.name = "binho";
    res.send(req.session);
});

app.listen(3000);
