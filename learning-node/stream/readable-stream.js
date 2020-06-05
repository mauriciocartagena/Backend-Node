const { Readable } = require('stream');

const readableStream = new Readable();

readableStream.push(`${0 / 0}`.repeat(10).concat("Batman,Batman!"));
readableStream.push(null);
//process.stadout is == to console.log()
readableStream.pipe(process.stdout);