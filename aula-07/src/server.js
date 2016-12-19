//es20015 syntax

import http from "http";
import {test,json,notFound} from "./routes";

const server = http.createServer((request,response)=>{

  //take the headers of the request
  const headers = request.headers;

  //take the method
  const method = request.method;

  //take the url
  const url = request.url;

  if (url == '/test') {
    //define the header for response
    test(request, response);
  }

  else if (url == '/json') {
    //define the header for response
    json(request, response);

  }

  else {
    notFound(request, response);
  }

}).listen(3000);
