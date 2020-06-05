const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  if (req.method === 'POST' && req.url == "/echo") {
    let body = [];

    req.on('data', chunk => {
      body.push(chunk);
    })
      .on("end", () => {
        // //estatud 200 significado =>  que todo esta OK
        // res.statusCode = 200;
        // res.setHeader("Content-Type", "text/plain");
        res.writeHead(200, { 'Content-Type': ' text/plain' })
        body = Buffer.concat(body).toString();


        //1855-09-13
        let date = new Date(body);
        let day = date.getDay();
        let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        //hace un recorrido en el array de meses que tenemos ${weekDays[day]} pasandole un numero 
        res.end(`You were born in the day : ${weekDays[day]}`);
      });

  } else {
    res.statusCode = 404;
    res.end();
  }

});

server.listen(8002);
console.log("Servidor en la url http://localhost:8002");