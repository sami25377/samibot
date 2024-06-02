module.exports.config = {
  usePrefix: true,
  name: "\n",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Mirai-Team",
  hide: true,
  description: "Sends uptime, group count, chip info, etc.",
  commandCategory: "system",
  cooldowns: 2,
  dependencies: {
    "pidusage": "",
    "fs-extra": ""
  }
};

function byte2mb(bytes) {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let l = 0,
    n = parseInt(bytes, 10) || 0;
  while (n >= 1024 && ++l) n = n / 1024;
  return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}

module.exports.run = async function({ api, event, Threads, getText }) {
  const fs = require("fs-extra");
  var os = require("os");
  var cpus = os.cpus();
  var chips;
  for (var i of cpus) chips = i.model, speed = i.speed;

  var time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);

  var z_1 = (hours < 10) ? '0' + hours : hours;
  var x_1 = (minutes < 10) ? '0' + minutes : minutes;
  var y_1 = (seconds < 10) ? '0' + seconds : seconds;

  const pidusage = await global.nodemodule["pidusage"](process.pid);
  const timeStart = Date.now();

  //const fs = global.nodemodule["fs-extra"];
  var { threadID, messageID, senderID } = event;
  if (senderID == global.data.botID) return;

  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data;
  var prefix = data.PREFIX;
  var rankup = data.rankup;
  var resend = data.resend;
  var log = data.log;
  var tagadmin = data.tagadmin;
  var guard = data.guard;
  var antiout = data.antiout;
  prefix == null ? prefix = `/` : prefix = `${prefix}`;
  log == null ? log = `ON✓` : log = `${log}`;
  rankup == null ? rankup = `ON✓` : rankup = `${rankup}`;
  resend == null ? resend = `Ban×` : resend = `${resend}`;
  tagadmin == null ? tagadmin = `ON✓` : tagadmin = `${tagadmin}`;
  guard == null ? guard = `ON✓` : guard = `${guard}`;
  antiout == null ? antiout = `OFF×` : antiout = `${antiout}✓`;

  return api.sendMessage({
    body: `⭓𝗕𝗼𝘁 𝗶𝘀 𝗮𝗰𝘁𝗶𝘃𝗲 𝗻𝗼𝘄✅\n•────•••────•\n➤Prefix: ${prefix}\n➤ Log: ${log}\n➤ Rankup: ${rankup}\n➤ Resend: ${resend}\n➤ Antiout: ${antiout}\n•────•••────•\n❯ Uptime: ${hours} hours ${minutes} minute ${seconds} seconds.\n➥ Total users: ${global.data.allUserID.length}\n➥ Total Group: ${global.data.allThreadID.length}\n➥ CPU in use: ${pidusage.cpu.toFixed(1)}%\n➥ Ram in use: ${byte2mb(pidusage.memory)}\n➥ Ping: ${Date.now() - timeStart}ms`,
    attachment: fs.createReadStream(__dirname + "/noprefix/uptime.png")
  }, event.threadID);
};
