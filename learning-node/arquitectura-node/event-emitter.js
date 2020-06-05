const EventEmmiter = require('events');

class Logger extends EventEmmiter {

  execute(cb) {
    console.log('Before');
    this.emit('start');
    cb();
    this.emit('finish');
    console.log('After');
  }
}

const logger = new Logger();
logger.on('start', () => console.log('starting'));
logger.on('finish', () => console.log('finishing'));
logger.on('finish', () => console.log('it \' Done '));

// logger.execute(() => console.log('hello world'))
logger.execute(() => setTimeout(() => console.log('Hello world'), 500));