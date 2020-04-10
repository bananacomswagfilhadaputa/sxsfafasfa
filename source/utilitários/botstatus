const Discord = require('discord.js');

exports.run = async (galaxy, message, args) => {
	
	 if(message.channel.id != "677306938052182040") return message.reply(`Você não pode executar comandos aqui, vá em <#677306938052182040> e execute o seu desejado comando!`)
   message.delete().catch(O_o=>{})

    var date = new Date(galaxy.uptime);
    var uptime = '';
    
    const d = uptime += date.getUTCDate() - 1 + 'd, ';
    const h = uptime += date.getUTCHours() + 'h, ';
    const m = uptime += date.getUTCMinutes() + 'm, ';
    const s = uptime += date.getUTCSeconds() + 's';

    const botstatus = new Discord.RichEmbed()
        .setColor('#3498db')
        .setTitle(`Status do Bot`, galaxy.user.displayAvatarURL)
        .setDescription(`:computer: Uso de memória: **${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB**
:computer: Uso do CPU: **${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}%**
Versão do discord.js: **v${Discord.version}**
Versão do node.js: **${process.version}**
:stopwatch: Uptime: **${s}**
:busts_in_silhouette: Usuários: **${galaxy.users.size.toLocaleString()}**
:cityscape: Servidores: **${galaxy.guilds.size.toLocaleString()}**`)
    message.channel.send(message.author, botstatus);
      
}

module.exports.help = {
    name:'botstatus'
    }
