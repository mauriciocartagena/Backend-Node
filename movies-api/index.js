const express = require('express');
const app = express();

const { config } = require('./config/index')
const moviesApi = require('./routes/movies.js');

moviesApi(app);


// app.get('/', function (req, res) {
//   res.send('Hello World');
// });
// app.get('/json', function (req, res) {
//   res.json({ hello: 'World' });
// });
// app.get('/challenge/:year', function (req, res) {
//   let year = req.params.year;
//   if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
//     res.json({ Yes: `si es bisiesto ${year}` });
//   }
//   else return res.json({ No: `no es bisiesto ${year}` });
// });
app.listen(config.port, function () {
  console.log(`You app is runnig in http://localhost:${config.port}`);
})