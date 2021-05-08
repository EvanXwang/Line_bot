const line = require('@line/bot-sdk');
require('dotenv').config();
// create LINE SDK config from env variables
const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET,
};

const client = new line.Client(config);
const middleware = line.middleware(config);

module.exports = {
    middleware : middleware,
    lineClient : client
};