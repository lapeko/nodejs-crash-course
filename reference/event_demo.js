const EventEmitter = require('events');

class MyEventEmitter extends EventEmitter { };

const myEmitter = new MyEventEmitter();

myEmitter.on('event', () => console.log('My event emmiter was fired'));

myEmitter.emit('event');
myEmitter.emit('event');