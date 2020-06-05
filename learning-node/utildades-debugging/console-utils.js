// %s string
// %d numero placeholder
// %j JSON
// console.log("Un %s y un %s", "un perrito", "un gatito");
// console.info("Hello World");

// //alias de error console.error()
// console.warn("Hello error");

// // Una forma de mostrar error tambien
// console.assert(42 == "42");
// console.assert(42 === "42");

// //informaciona  detalle
// console.trace("Hello");

const util = require("util");
const debuglog = util.debuglog("foo");

debuglog("Hello from foo");

// NODE_DEBUG=foo node console-utils.js



