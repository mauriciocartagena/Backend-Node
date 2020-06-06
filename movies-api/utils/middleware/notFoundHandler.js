const boom = require('@hapi/boom');

function notFoundHandler(req, res) {
  const { output: {
    statusCode,//El codigo del error 
    payload//El mensaje del error
  } } = boom.notFound();
  res.status(statusCode).json(payload);
}
module.exports = notFoundHandler;