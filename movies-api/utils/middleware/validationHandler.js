const boom = require('@hapi/boom');
const joi = require('@hapi/joi');

function validate(data, schema) {
  const { error } = joi.object(schema).validate(data);
  return error;
}

function validationHandler(shema, check = "body") {
  return function (req, res, next) {
    const error = validate(req[check], shema);

    error ? next(boom.badImplementation(error)) : next();
  }
}
module.exports = validationHandler;