import app from "express";
const router = app.Router();

router
.get("/", (req,res)=>{
  res.send(users);
})

.get("/:id", (req,res)=>{

  //o {} permite acessar o valor sem a chave (nao imprime a chave p.e.)
  const {id} = req.params;

  //encontra um usuario no array
  const user = users.find(user => user.id == id);

  if (!user) {
    res.status(404).send(`User ${id} doesnt exists!`);
  }else {
    res.send(user);
  }


})

.post("/", (req,res)=>{

  const user = {
    "id" : req.body.id,
    "first_name": req.body.name,

  }

  users.push(user);

  console.log(user);
  res.sendStatus(200);
})

.delete("/:id", (req,res)=>{

  const {id} = req.params;
  const index = users.findIndex(user => user.id == id);

  if (index > -1) {
    users.splice(index,1);
    res.sendStatus(200);
  }else {
    res.status(404).send(`User ${id} doesnt exists!`);
  }

})
;


module.exports = router;

const users = [{
  "id": 1,
  "first_name": "Timothy",
  "last_name": "Henry",
  "email": "thenry0@smh.com.au",
  "gender": "Male"
}, {
  "id": 2,
  "first_name": "Virginia",
  "last_name": "Morrison",
  "email": "vmorrison1@jugem.jp",
  "gender": "Female"
}, {
  "id": 3,
  "first_name": "David",
  "last_name": "Boyd",
  "email": "dboyd2@livejournal.com",
  "gender": "Male"
}, {
  "id": 4,
  "first_name": "Eric",
  "last_name": "Reid",
  "email": "ereid3@blog.com",
  "gender": "Male"
}, {
  "id": 5,
  "first_name": "Beverly",
  "last_name": "Hamilton",
  "email": "bhamilton4@so-net.ne.jp",
  "gender": "Female"
}, {
  "id": 6,
  "first_name": "Samuel",
  "last_name": "Freeman",
  "email": "sfreeman5@paypal.com",
  "gender": "Male"
}, {
  "id": 7,
  "first_name": "Janet",
  "last_name": "Martin",
  "email": "jmartin6@dmoz.org",
  "gender": "Female"
}, {
  "id": 8,
  "first_name": "Linda",
  "last_name": "Myers",
  "email": "lmyers7@biblegateway.com",
  "gender": "Female"
}, {
  "id": 9,
  "first_name": "Judy",
  "last_name": "Perkins",
  "email": "jperkins8@meetup.com",
  "gender": "Female"
}, {
  "id": 10,
  "first_name": "Mark",
  "last_name": "Ortiz",
  "email": "mortiz9@drupal.org",
  "gender": "Male"
}, {
  "id": 11,
  "first_name": "John",
  "last_name": "Roberts",
  "email": "jrobertsa@sciencedaily.com",
  "gender": "Male"
}, {
  "id": 12,
  "first_name": "Lisa",
  "last_name": "Cunningham",
  "email": "lcunninghamb@com.com",
  "gender": "Female"
}, {
  "id": 13,
  "first_name": "Billy",
  "last_name": "Jacobs",
  "email": "bjacobsc@fda.gov",
  "gender": "Male"
}, {
  "id": 14,
  "first_name": "Wayne",
  "last_name": "Ray",
  "email": "wrayd@vistaprint.com",
  "gender": "Male"
}, {
  "id": 15,
  "first_name": "Theresa",
  "last_name": "Morrison",
  "email": "tmorrisone@auda.org.au",
  "gender": "Female"
}, {
  "id": 16,
  "first_name": "Brandon",
  "last_name": "Gonzalez",
  "email": "bgonzalezf@tamu.edu",
  "gender": "Male"
}, {
  "id": 17,
  "first_name": "Jack",
  "last_name": "Smith",
  "email": "jsmithg@nhs.uk",
  "gender": "Male"
}, {
  "id": 18,
  "first_name": "Theresa",
  "last_name": "Stewart",
  "email": "tstewarth@google.es",
  "gender": "Female"
}, {
  "id": 19,
  "first_name": "Joe",
  "last_name": "Jones",
  "email": "jjonesi@vinaora.com",
  "gender": "Male"
}, {
  "id": 20,
  "first_name": "Lori",
  "last_name": "Bell",
  "email": "lbellj@bing.com",
  "gender": "Female"
}];
