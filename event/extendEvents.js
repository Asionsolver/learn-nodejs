const School = require('./school');
const school = new School();

school.on('bellRing', ({ period, text }) => {
    console.log(`Period ${period}${text}. Time to go to the next class!`);
})
school.startPeriod();