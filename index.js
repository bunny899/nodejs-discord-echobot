const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    // check if message isn't from us
    if (msg.author === client.user) {
      return;
    }
    else if (msg.content.startsWith('/say')) {
      // Extract the message after "/say"
      const messageToSay = msg.content.slice(5).trim();
      
      // Check if there's actually a message to say
      if (messageToSay) {
        // Respond with the message prefixed with "message:"
        msg.channel.send('message: ' + messageToSay);
      } else {
        // If no message provided after "/say", inform the user
        msg.reply('You need to provide a message after "/say"');
      }
    }
});

client.login(process.env.TOKEN);
