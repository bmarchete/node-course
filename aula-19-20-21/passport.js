const passport = require('passport');
const bcrypt = require('bcrypt-nodejs');
const LocalStrategy = require('passport-local').Strategy;
const db = require('./db');

//inicializa a estrategia de autenticação para o passport
//a função dentro de LocalStrategy configura os parametros de autenticação
passport.use(new LocalStrategy(auth));

//permite receber parametros na função de registro
passport.use('local-register',new LocalStrategy({passReqToCallback: true}, register));

//configuração de autenticação
//done é uma função que retorna o status da autenticação
function auth(email,password,done){
  db("users")
    .where("email", email)
    .first()
    .then((user)=>{

      //verifica se o login está correto
      if(!user || !bcrypt.compareSync(password, user.password)){
        console.log(user);
          return done(null, false, {message: "erro ao autenticar"});
      }


      done(null, user)

    });
}

function register(req,email,password,done){
  db("users")
    .where("email", email)
    .first()
    .then((user)=>{

      //verifica se o login está correto
      if(user){
          console.log(user);
          return done(null, false, {message: "Email já existe"});
      }

      if(req.password != req.password2){
          console.log('invalid passwords');
          return done(null, false, {message: "Senhas diferentes"});
      }

      const newUser ={
        name: req.body.name,
        email: email,
        password: bcrypt.hashSync(req.body.password)
      }

      db("users").insert(newUser).then((ids) => {

        newUser.id = ids[0];
        done(null, newUser);

      }, done);

    });
}

//função que indica para o passport armazenar no cookie apenas o id do usuario
//essa função é chamada automaticamente pela biblioteca passport ou por quem
//a usua
passport.serializeUser((user, done)=>{
  done(null, user.id);
});

//função que trata o retorno do cookie vindo do browser
passport.deserializeUser((id, done)=>{
  db("users")
    .where("id", id)
    .first()
    .then((user)=>{

      done(null, user)

    },done);
});
