const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('./db');

//inicializa a estrategia de autenticação para o passport
//a função dentro de LocalStrategy configura os parametros de autenticação
passport.use(new LocalStrategy(auth));

//configuração de autenticação
//done é uma função que retorna o status da autenticação
function auth(email,password,done){
  db("users")
    .where("email", email)
    .first()
    .then((user)=>{

      //verifica se o login está correto
      if(!user || user.password !== password){
        console.log(user);
          return done(null, false, {message: "erro ao autenticar"});
      }


      done(null, user)

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
