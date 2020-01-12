const { RichEmbed } = require('discord.js')
module.exports.run = async (bot, message, args, c) => {
  message.delete()
    message.channel.send(`Fetching!`).then(m => {
            m.edit(`**Bot** - ` + (m.createdTimestamp - message.createdTimestamp) + `ms.` + ` \n**Discord API** - ` + Math.round(bot.ping) + `ms.`);
        });
}
