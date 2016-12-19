import app from "express";
import {root,profile,loggin} from './handlers';
import {logging} from './logging';


app()
  .use((req,res,next)=>{

    logging(req);

    next();
  })
  .get("/", (req,res)=>{

    root(req,res);
  })
  .get("/profile", (req,res)=>{

    profile(req,res);
  })


  .listen(3000);
