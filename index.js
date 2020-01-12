const Discord = require('discord.js');
const bot = new Discord.Client({autoReconnect: true});

const {promisify} = require('util');
const readdir = promisify(require('fs').readdir);
const Enmap = require('enmap');
bot.config = require('./config');
const clashApi = require('clash-of-clans-api');
bot.commands = new Enmap();
bot.c = bot.config.c
bot.client = clashApi({
  token: bot.config.coc_token
});
readdir('./commands/', (err, files) => {
  if (err) return console.error(err);

  files.forEach(file => {
    if (!file.endsWith('.js')) return;

    const props = require(`./commands/${file}`);
    const commandName = file.split('.')[0];

    console.log(`📝 Command [${commandName}] has been loaded.`);
    bot.commands.set(commandName, props);
  });
});
readdir('./events/', (err, files) => {
  if (err) return console.error(err);

  files.forEach(file => {
    if (!file.endsWith('.js')) return;

   let props = require(`./events/${file}`);

    const eventName = file.split('.')[0];

    bot.on(props.event.name, props.bind(null, bot));
    console.log(`🔧 Event [${eventName}] has been loaded.`);
    delete require.cache[require.resolve(`./events/${file}`)];
  });
});
bot.login(bot.config.token);
