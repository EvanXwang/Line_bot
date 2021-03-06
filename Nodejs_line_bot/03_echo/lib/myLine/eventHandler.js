const client = require('./bot').lineClient;

// event type : message follow unfollow join leave memberJoined memberLeft postback beacon accountLink things
// message type : text image video audio file location sticker

function handleEvent(event) {
    if (event.type !== 'message' || event.message.type !== 'text') {
        // ignore non-text-message event
        return Promise.resolve(null);
    }
    // create a echoing text message
    const echo = { type: 'text', text: event.message.text };

    // use reply API
    return client.replyMessage(event.replyToken, echo);
}

module.exports = handleEvent