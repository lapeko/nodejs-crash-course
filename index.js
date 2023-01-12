const Logger = require('./logger');

const logger = new Logger();

logger.on('log', console.log);

logger.log('Hello');
logger.log('Hi');
logger.log('Qwerty');