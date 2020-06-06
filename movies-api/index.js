const express = require('express');
const cors = require('cors');
const app = express();

const { config } = require('./config/index')
const moviesApi = require('./routes/movies.js');

const { errorHandler, logErrors, wrapErrors } = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

//que cuando le enviemos a nuestra ruta datos tipo json sepa interpretarlos
//body parse
app.use(express.json());

//Cors
app.use(cors());

//routes
moviesApi(app);

//Catch de 404
app.use(notFoundHandler);

//Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function () {
  console.log(`You app is runnig in http://localhost:${config.port}`);
})

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
