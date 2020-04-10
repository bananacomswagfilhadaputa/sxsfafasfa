const Discord = require('discord.js');

module.exports.run = async (galaxy, message, args) => {
	
	if(message.channel.id != "677306938052182040") return message.reply(`Você não pode executar comandos aqui, vá em <#677306938052182040> e execute o seu desejado comando!`)
   message.delete().catch(O_o=>{})

    message.delete().catch(O_o=>{});

    message.reply();
  
    let msa = message.author;
    let embed = new Discord.RichEmbed()
    .setDescription(`<a:discord:492695508242923540> BOT desenvolvido pelo: <@640523383561519114>.\n\nRedes Sociais:\n<a:tophand:492705949145104404> Twitter: @BigBotdp`)
    .setTitle("Informações do Bot")
    .setTimestamp()
    .setFooter("©PT Customs", galaxy.user.avatarURL)
    .setThumbnail(galaxy.user.avatarURL)
    .setColor("#2647ce")
    message.channel.send(embed);
}
module.exports.help = {
name:'dev'
}
