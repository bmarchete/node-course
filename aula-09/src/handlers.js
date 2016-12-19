export function root(req,res) {
  res.send("Ola mundo");
};

export function profile(req,res) {

  const j = {
    "id": 1,
    "value": "a"
  };

  res.send(j);
};
export function loggin(req,res) {

  
};
