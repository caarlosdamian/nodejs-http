import { error } from 'console';
import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log(`Hello ${name}`);
}
function goodByHandler(name) {
  console.log(`Good bye ${name}`);
}

// register

myEmitter.on('myEmitter', greetHandler);
myEmitter.on('goodbye', goodByHandler);

// emmit event

myEmitter.emit('myEmitter', 'John');
myEmitter.emit('goodbye', 'Vsrlos');

// Error handeling

myEmitter.on('error', (error) => {
  console.log('An Error Ocurrred:', error);
});

// simulate error

myEmitter.emit('error', new Error('Something went wrong'));
