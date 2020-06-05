const { Writable } = require('stream');

const writableStream = new Writable({
  write(texto, encoding, callback) {
    console.log(texto.toString());
    callback();
  }
});

process.stdin.pipe(writableStream);