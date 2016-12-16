const axios = require('axios');
const fs = require('fs');
const _ = require('lodash');

//call a api, returning two values
axios.get('http://rest.learncode.academy/api/myuser/friends').then((response)=>{

  //finds someone who are less than 32 years old
  const newer = _.find(response.data, (newer)=>{
    return newer.age < 32;
  });

  // write a file with the date getted above
  fs.writeFileSync('friends.txt', JSON.stringify(newer, null, 4), (err) =>{
    console.log('Arquivo criado');
  });

}).catch((error)=>{
  console.log(error);
});
