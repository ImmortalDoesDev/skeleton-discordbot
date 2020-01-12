const http = require('http');

module.exports = async (bot) => {
console.log("I am up!")
  bot.user.setActivity(`Make yours on https://github.com/ImmortalEvil/skeleton-discordbot`, {TYPE: 'WATCHING'})
  bot.user.setStatus('online')
}

module.exports.event = {
  name: "ready"
}
