const Twit = require('twit');
const unique = require('unique-random-array');
const config = require('../config');

const param = config.configOptions;
const randomReply = unique(param.randomReply.split('|'))

const Dennis = new Twit(config.keys)

// function: tweets back to user who followed
function tweetNow(text) {
  let tweet = {
    status: text
  }

  Dennis.post('statuses/update', tweet, (err, data, response) => {
    if (err) {
      console.log('ERRORED Reply', err);
      return;
    }
    console.log('SUCCESS: Replied: ', text);
  });
}

// function: replies to user who followed
const reply = (event) => {
  // get user's twitter handler/screen name
  let screenName = event.source.screen_name

  const response = randomReply()

  const res = response.replace('${screenName}', screenName);

  tweetNow(res);
}

module.exports = reply