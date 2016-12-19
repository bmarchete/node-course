//es20015 syntax

export function test(req, res){
  res.setHeader("Content-type", "text/html");
  res.end("<h1>Hello guys</h1>");
};
export function json(req, res){
  const json = {name: "Binho", age: 32};
  res.setHeader("Content-type", "application/json");
  res.end(JSON.stringify(json));
};
export function notFound(req, res){
  res.statusCode = 404;
  res.setHeader("Content-type", "text/html");
  res.end("<h1>404 Não encontrado</h1>");
};
