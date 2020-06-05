const { Transform } = require('stream');

const transformStream = new Transform({
  transform(texto, encoding, callback) {
    this.push(texto.toString().toUpperCase());
    callback();
  }
});

process.stdin.pipe(transformStream).pipe(process.stdout);
