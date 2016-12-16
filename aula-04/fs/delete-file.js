const f = require('fs');

f.unlink('./out.txt', (err) => {
  if (err) throw err;
  console.log('out.txt deleted');
});
