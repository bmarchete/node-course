//receive arguments from command line
let op = process.argv[2];
let a = Number(process.argv[3]);
let b = Number(process.argv[4]);

if (op == 'add') {
  console.log(a+b);
}

if (op == 'sub') {
  console.log(a-b);
}

if (op == 'mult') {
  console.log(a*b);
}

if (op == 'div') {
  console.log(a/b);
}


//setTimeout(()=> console.log(a+b),2000);



//console.log(process.env);
