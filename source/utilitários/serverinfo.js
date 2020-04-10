const Discord = require('discord.js');

module.exports.run = async (galaxy, message, args) => {
	
	if(message.channel.id != "677306938052182040") return message.reply(`Você não pode executar comandos aqui, vá em <#677306938052182040> e execute o seu desejado comando!`)
   message.delete().catch(O_o=>{})

function checkBots(guild) {
    let botCount = 0;
    guild.members.forEach(member => {
      if(member.user.bot) botCount++;
    });
    return botCount;
  }

  function checkMembers(guild) {
    let memberCount = 0;
    guild.members.forEach(member => {
      if(!member.user.bot) memberCount++;
    });
    return memberCount;
  }

message.delete().catch(O_o=>{});

message.reply();

let embed = new Discord.RichEmbed()
  .setTitle(`${message.guild.name} - Informações do servidor!`)
  .addField('👑 Dono', message.guild.owner, true)
  .addField('🌎 Região', message.guild.region, true)
  .addField('💬 Canais', message.guild.channels.size, true)
  .addField('👥 Membros', message.guild.memberCount)
  .addField('👤 Pessoas', checkMembers(message.guild), true)
  .addField('🤖 Bots', checkBots(message.guild), true)
  .addField("🔧 Cargos:", message.guild.roles.size, true)
  .addField('💻 ID', message.guild.id, true)
  .setFooter("© PT CUSTOMS", galaxy.user.avatarURL)
  .setThumbnail(galaxy.user.avatarURL)
  .setTimestamp()
  message.channel.send(embed);
}
module.exports.help = {
name:'serverinfo'
}
