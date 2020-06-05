const util = require('util');

const Hellopluto = util.deprecate(() => {
  console.log("Hello pluto");
}, 'pluto is deprecated.It is not a planet anymore');

Hellopluto();
// para mostrar en google
// node --inspect console-class.js