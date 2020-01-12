const discord = require('discord.js')

module.exports = async (bot, message) => {

  if(message.author.bot) return;
  if (message.channel.type !== 'text') return;


if (message.channel.type !== 'text') return;
  //if (message.content.indexOf(bot.config.prefix) !== 0) return;
let prefix = bot.config.prefix
  if(!message.content.startsWith(prefix)) prefix = '<@556523734266019840>'
  if(!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = bot.commands.get(command);
  const c = bot.config.c
  //const config = bot.config
  if (!cmd) return;

  cmd.run(bot, message, args, c)

 // if (!cmd) return;

}

module.exports.event = {
  name: "message"
}
