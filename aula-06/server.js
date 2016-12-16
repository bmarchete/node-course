const http = require('http');
const routes = require('./routes');

const server = http.createServer((request,response)=>{

  //take the headers of the request
  const headers = request.headers;

  //take the method
  const method = request.method;

  //take the url
  const url = request.url;

  if (url == '/test') {
    //define the header for response
    routes.test(request, response);
  }

  else if (url == '/json') {
    //define the header for response
    routes.json(request, response);

  }

  else {
      routes.notFound(request, response);
  }

}).listen(3000);
