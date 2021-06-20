const Discord = require('discord.js');

exports.run = async(client, message, args) => {

  message.channel.send("amelson bos altyapı")
}
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "amelson"
}


