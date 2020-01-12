# skeleton-discordbot
It's the basic, skeletal structure for your discord bot! You can use this as basic code to create multiple commands!

So, you need to go to config.js and add the right information you need. Be sure to completely fill all the details.
Then, go to your terminal and type, 

`node index.js` and that could bring your bot live!
Type, 

`<your-prefix>ping`

The bot should respond with the ping time!

You can add multiple commands by create the files inside the `commands` folder with the name of the command. Then add the follwing code to it,

`const { RichEmbed } = require('discord.js')
module.exports.run = async (bot, message, args, c) => {
\\Your Codes here!
}`

If you need to add an event, go to the `events` folder and create a file with the name of the event you need and add the following code to it,

`const {Discord} = require('discord.js')
module.exports = async (bot) => {
\\Your Codes here for the event!
}

module.exports.event = {
  name: "YourEventName"
}`

Congrats! You made your own bot now!
