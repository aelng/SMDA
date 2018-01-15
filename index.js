const Discord = require("discord.js")
const bot = new Discord.Client();
const prefix = '~'




bot.on("message", (message) => {
    
    const lowMessage = message.content.toLowerCase();

        if (!message.content.startsWith(prefix)) return;

        let args = message.content.substring(prefix.length).split(" ");
        switch (args[0].toLowerCase()) {
            case "help":
            message.channel.send(new Discord.RichEmbed()

            .setDescription = "To kno da wae, you must do ~showdawae. That will show you da wae to you're different chat sections! REMINDER: This discord bot only works with chat channels ATM and will soon be compatible with voice channels"
        )
            
            break;
            case "showdawae":
            message.channel.send("I will show you da wae! spit spit spit")
            message.channel.send(buildEmbed(message));
            break;
        }
        
        
});
const TOKEN = "NDAxNTMxNjYzOTkxMTc3MjI2.DTzhmA.6pJXFZPLylVfg7C4d6IL-ypkpCE"
bot.login(TOKEN);

function buildEmbed(message){
    const channelEmbed = new Discord.RichEmbed();
    const channelObject = {};
    message.guild.channels.array().forEach( (channel) => channelObject[channel.id] = channel);
    for(channel in channelObject){
        const currChannel = channelObject[channel];
        channelEmbed.addField(currChannel.name,`Link: ${currChannel.toString()} \n Description: ${currChannel.topic}`);
    }
    return channelEmbed;
}
