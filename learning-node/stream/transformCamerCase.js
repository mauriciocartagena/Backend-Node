const { Transform } = require("stream");

const tranformStream = new Transform({
  transform(text, encoding, callback) {
    this.push(text.toString().split(" ").map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(""));
    callback();
  }
})

process.stdin.pipe(tranformStream).pipe(process.stdout);