const EventEmitter = require('events');
const { v4 } = require('uuid');

class Logger extends EventEmitter {
  log(message) {
    this.emit("log", `${v4()}, ${message}`);
  }
};

module.exports = Logger;