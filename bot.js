require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();

const commandPrefix = "$";

client.on("ready", () => {
  console.log("The bot is ready to go");
});

client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
  if (msg.content === `${commandPrefix}mod`) {
    msg.member.roles.add("786430192322084915");
  }
  if (msg.content === "CIA is the best") {
    msg.react("💕");
  }
});

client.on("channelCreate", (channel) => {
  channel.send(`The channel${channel.name} has been created`);
});

client.login(process.env.BOT_TOKEN);
