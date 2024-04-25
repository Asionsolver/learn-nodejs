const EventEmitter = require('events'); // EventEmitter is a class

const emitter = new EventEmitter();

// // register a listener for bellRing event
// emitter.on('bellRing', () => {
//     console.log(`We need to run!`);
// });

// raise an event
// setTimeout(() => {
//     emitter.emit('bellRing');
// }, 2000);

// Event parameters
emitter.on('bellRing', ({period, text}) => {
    console.log(`${period} ${text}. We need to run!`);
});


// raise an event
setTimeout(() => {
    emitter.emit('bellRing', {
        period: 'First',
        text: ' period is over!'
    });
}, 2000);

