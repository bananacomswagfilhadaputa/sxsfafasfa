const Discord = require("discord.js");

module.exports.run = async (galaxy, message, args, prefix) =>{
	
	if(message.channel.id != "677306938052182040") return message.reply(`Você não pode executar comandos aqui, vá em <#677306938052182040> e execute o seu desejado comando!`)
   message.delete().catch(O_o=>{})

    var prefix = "+";

   message.delete().catch(O_o=>{});
   
    if(!message.member.hasPermission('MANAGE_GUILD'))
      return message.reply("você não tem permissão! :x:").then(msg => msg.delete(6000));
    
    const comousar = new Discord.RichEmbed()
    .setAuthor("PT CUSTOMS - Informações do AddCargo: ", walk.user.avatarURL)
    .setDescription(`Irá abrir uma votação no canal que a mensagem foi executada.`)
    .setFooter("© PT CUSTOMS", galaxy.user.avatarURL)
    .addField("Como usar:", `\`${prefix}vote <mensagem da votação>\``)
    .addField("Permissão:", "O staff que for usar o comando tem que esta em um cargo com a permissão `Gerenciar servidor`")
   
    let mensg = args.join(" ");
    if(!mensg)
        return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));
   
    const vote = new Discord.RichEmbed()
        .setTitle(":thinking: Votação")
        .setDescription(`\n\n${mensg}`)
        .setColor("#00ffa8")
        .setFooter(`Por: ${message.author.tag} - © PT CUSTOMS Votação`)

    const categoria = new Discord.RichEmbed()
        .setTitle("Escolha uma categoria...")
        .setDescription("\n\n**🔢 Número**\n`Emojis:` 1⃣ 2⃣ 3⃣\n\n**👍 Like**\n`Emojis:` 👍 👎 ❓")
        .setColor("#00ffa8")
        .setFooter(`Por: ${message.author.tag}`)
    message.channel.send(categoria).then(msg=> {
        msg.react("🔢").then(r => {
            msg.react("👍")
        
            const num = (reaction, user) => reaction.emoji.name === '🔢' && user.id === message.author.id;
            const like = (reaction, user) => reaction.emoji.name === '👍' && user.id === message.author.id;

            const numl = msg.createReactionCollector(num, { time: 60000 });
            const likel = msg.createReactionCollector(like, { time: 60000 });

            numl.on('collect', r=> {
                msg.delete();
                message.channel.send(vote).then(msg1=> {
                    msg1.react("1⃣").then(r => {
                        msg1.react("2⃣")
                        msg1.react("3⃣")
                    })})
            })
            likel.on('collect', r=> {
                msg.delete();
                message.channel.send(vote).then(msg2=> {
                    msg2.react("👍").then(r => {
                        msg2.react("👎")
                        msg2.react("❓")
                    })})
            })
        })
    })
}

module.exports.help = {
    name:'vote'
    }
