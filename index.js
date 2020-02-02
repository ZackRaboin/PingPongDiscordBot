const Discord = require('discord.js');
const client = new Discord.Client();
const configuration = require('./config.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.channel.name === configuration.ping) {
	  const channel = client.channels.find(x => x.name === configuration.pong);
      channel.send( '**' + msg.author.username + " : ** " + msg.content)
	    .catch(console.error);
	  msg.delete()
        .catch(console.error);
  }
});

client.login(configuration.token);