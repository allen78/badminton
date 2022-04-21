// Maded By Chun Shawn in jcshawn.com
// Contact : contact@jcshawn.com
// 當 LINE BOT 接收到訊息，會自動執行 doPost

function doPost(e) {
  // LINE Messenging API Token
  var CHANNEL_ACCESS_TOKEN = ''; // 引號內放你的 LINE BOT Access Token
  // 以 JSON 格式解析 User 端傳來的 e 資料
  var msg = JSON.parse(e.postData.contents);

  // 從接收到的訊息中取出 replyToken 和發送的訊息文字，詳情請看 LINE 官方 API 說明文件
  
  const replyToken = msg.events[0].replyToken; // 回覆的 token
  const userMessage = msg.events[0].message.text; // 抓取使用者傳的訊息內容
  const user_id = msg.events[0].source.userId; // 抓取使用者的 ID，等等用來查詢使用者的名稱
  const event_type = msg.events[0].source.type; // 分辨是個人聊天室還是群組，等等會用到

  // reply_messgae 為要回傳給 LINE 伺服器的內容，JSON 格式，詳情可看 LINE 官方 API 說明
  var reply_message = [{
    "type":"text",
    "text":"引號內放要回傳給 User 的訊息"
  }]


  //回傳 JSON 給 LINE 並傳送給使用者
  var url = 'https://api.line.me/v2/bot/message/reply';
  UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'replyToken': replyToken,
      'messages': reply_message,
    }),
  });

}