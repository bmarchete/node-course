import app from "express";
import users from './routes/users';
import bodyParser from 'body-parser';

app()
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: false}))
  .use("/users", users)
  .listen(3000);
