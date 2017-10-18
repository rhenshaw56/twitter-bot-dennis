// require('./lib/bot');

const text = require('./lib/config').configOptions.randomReply;
const resw = text.split('|');
console.log(resw);
.replace('@${screenName}', 'bola')