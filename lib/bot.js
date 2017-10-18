var Twit = require('twit');
var config = require('./config');

var Dennis = new Twit(config.keys);

const retweet = require('./api/retweet');
const reply = require('./api/reply');

//retweet on words
retweet()
setInterval(retweet, config.configOptions.retweet)