const EventEmitter = require('events');

class School extends EventEmitter {
    startPeriod() {
        console.log('Class started');
        // raise an event
        this.emit('bellRing', {
            period: 'First',
            text: ' period is over!'
        });
    }
}

module.exports = School;