module.exports.config = { usePrefix: true,
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will reply when mention any admin",
  commandCategory: "noprefix",
  usages: "",
  cooldowns: 2
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100087177783557","100087177783557",
      "100087177783557") {
    var aid = ["100087177783557","100087177783557","100087177783557"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Keep stop, Don't mention my Boss!","Don't mention Sami!","Please don't mention him!","Sami is busy to writing code!",];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }