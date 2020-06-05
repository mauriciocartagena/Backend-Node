const fs = require('fs');

const message = fs.createWriteStream('./message.log');
const errores = fs.createWriteStream('./errores.log');

const consolePersonal = new console.Console(message, errores);

setInterval(() => {
  consolePersonal.log(new Date());
  consolePersonal.error(new Error("Error personal"));
}, 2500);