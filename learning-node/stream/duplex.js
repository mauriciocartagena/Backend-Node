const { Duplex } = require('stream');

const duplexStream = new Duplex({
  write(texto, encoding, callback) {
    console.log(texto.toString());
    callback();
  },
  read(size) {
    if (this.currentCharCode > 90) {
      this.push(null);
      return;
    }
    this.push(String.fromCharCode(this.currentCharCode++));
  }
});

duplexStream.currentCharCode = 65;
process.stdin.pipe(duplexStream).pipe(process.stdout);