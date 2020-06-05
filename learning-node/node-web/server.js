const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  //estatud 200 significado =>  que todo esta OK
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  res.end("Hello world \n");
});

server.listen(8000);
console.log("Servidor en la url http://localhost:8000");