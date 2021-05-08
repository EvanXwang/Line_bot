// 引用linebot SDK
var linebot = require('linebot');

// 用於辨識Line Channel的資訊
var bot = linebot({
  channelId: '替換成你的CHANNEL_ID',
  channelSecret: '替換成你的CHANNEL_SECRET',
  channelAccessToken: '替換成你的CHANNEL_ACCESS_TOKEN'
});

// 當有人傳送訊息給Bot時
// 處理「 訊息 」事件
bot.on('message', function (event) {
  // event.message.text是使用者傳給bot的訊息
  // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
  event.reply(event.message.text).then(function (data) {
    // 處理回覆成功的程式碼
  }).catch(function (error) {
    // 處理回覆失敗的程式碼
  });
});


// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () {
    console.log('[BOT已準備就緒]');
});