const router = require('express').Router();
//const router = express.Router();

router
  .get('/', (req,res)=>{
    res.sendStatus(200);
  })
  .get('/not', (req,res)=>{
    res.sendStatus(400);
  });


module.exports = router;
