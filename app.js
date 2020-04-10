const Discord = require('discord.js');
const config = require('./config.json');

const galaxy = new Discord.Client({disableEveryone: false, autoReconnect: true})

prefix = config.prefix;
token = config.token;
id = config.id;
i2d = config.i2d;
ready = 'ready';
message = 'message';
add = 'guildMemberAdd';
remove = 'guildMemberRemove';
create = 'guildCreate';
dele = 'guildDelete';
bot = new Discord.Collection();
const FS = require('fs');

galaxy.on(ready, () => {
  console.log('bigbotdp-iwnl')
  galaxy.user.setActivity('@bigbotdp on IG', {type: 'STREAMING', url: 'https://twitch.tv/bigbotdp'});
});
galaxy.on('message', message =>{
  if(message.content == `<@493071652993892354>`){
    message.channel.send("<a:discord:492695508242923540> **|**  Olá! Meu prefixo é ``!``, para ver o que eu posso fazer, use ``+ajuda``!")
    }
});

  galaxy.on(message, async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    if(!message.content.startsWith(config.prefix)) return;

    let prefix = config.prefix
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(message.content.startsWith(prefix)){
      let commandfile = bot.get(cmd.slice(prefix.length));
      if(commandfile) commandfile.run(galaxy,message,args);

      FS.readdir("./source/", (err, files) => {

        if(err) console.log(err);
        let jsfile = files.filter(f => f.split(".").pop() === 'js')
    
        jsfile.forEach((f, i) => {
            let propriets = require(`./source/${f}`);
            bot.set(propriets.help.name, propriets);
        });
  });

  FS.readdir("./source/moderação/", (err, files) => {

    if(err) console.log(err);
    let jsfile2 = files.filter(f => f.split(".").pop() === 'js')

    jsfile2.forEach((f, i) => {
        let propriets = require(`./source/moderação/${f}`);
        bot.set(propriets.help.name, propriets);
    });
});

FS.readdir("./source/utilitários/", (err, files) => {

  if(err) console.log(err);
  let jsfile3 = files.filter(f => f.split(".").pop() === 'js')

  jsfile3.forEach((f, i) => {
      let propriets = require(`./source/utilitários/${f}`);
      bot.set(propriets.help.name, propriets);
  });
});

FS.readdir("./source/diversão/", (err, files) => {

  if(err) console.log(err);
  let jsfile4 = files.filter(f => f.split(".").pop() === 'js')

  jsfile4.forEach((f, i) => {
      let propriets = require(`./source/diversão/${f}`);
      bot.set(propriets.help.name, propriets);
  });
});
    }
  });



galaxy.on('guildMemberAdd', member => {
  const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });

  let canal = member.guild.channels.find(r => r.name === '👋🏻welcome');
  if (!canal) return;

  var embed = new Discord.RichEmbed()
  .setColor(`#36393F`)
  .setDescription(`Seja bem-vindo ao servidor ${member}!\nEsperamos que se divirta!\n\n:white_small_square: Leia as <#493144191673565195> para evitar ser punido!\n:white_small_square: Visite o chat <#677464821041725441> para interagir com os membros.\n\n<:ceta:493180007267696645> Agora temos **${member.guild.memberCount}** membros no Discord!`)
  .setThumbnail(member.user.avatarURL)
  .setTimestamp()
  canal.send({embed : embed})
  message.react("❤")
});

galaxy.on('message', message =>{
	if(message.content == '<@493071652993892354> eu sou bonito?'){
	  message.reply(`Sim!`)
	  message.react("❤")
  	}
});

galaxy.on('message', message =>{
	if(message.content == '<@493071652993892354> o que acha dos humanos?'){
	  message.reply(`não sei de nada... só sei que vou dominar todos!`)
  	}
	if(message.content == 'Galaxy é o melhor bot de discord'){
	  message.reply(`Obrigado! :relaxed: `)
	  message.react("❤")
	  message.react("😘")
  	}
	if(message.content == '<@493071652993892354> melhor bot'){
	  message.reply(`Obrigado! :relaxed: `)
	  message.react("❤")
	  message.react("😘")
  }
});

client.on('message', message =>{
  if(message.content.includes("https://discord.gg/")){
  if (!message.member.hasPermission("ADMINISTRATOR")) return; 
    message.delete()
    message.channel.send(`${message.author}, não divulgue links de outros servidores!`)
  }
})


client.on('message', message =>{
  if(message.content.includes("https://discord.me/")){
  if (!message.member.hasPermission("ADMINISTRATOR")) return; 
    message.delete()
    message.channel.send(`${message.author}, não divulgue links de outros servidores!`)
  }
})

client.on('message', message =>{
  if(message.content.includes("https://youtu.be/")){
  if (!message.member.hasPermission("ADMINISTRATOR ")) return; 
    message.delete()
    message.channel.send(`${message.author}, não divulgue links de outros servidores!`)
  }
})

client.on('message', message =>{
  if(message.content.includes("https://youtube.com/")){
  if (!message.member.hasPermission("ADMINISTRATOR")) return; 
    message.delete()
    message.channel.send(`${message.author}, não divulgue links de outros servidores!`)
  }
})



    client.on("guildMemberAdd", member => {
      if(member.guild.id == "677278788979261440"){
          const channel = member.guild.channels.get("697977783208509490");
          channel.setName(`👤| Members: ${member.guild.memberCount - member.guild.members.filter(m=>m.user.bot).size}`)
      }
  });
  
  
  client.on("guildMemberRemove", member => {
      if(member.guild.id == "677278788979261440"){
          const channel = member.guild.channels.get("697977783208509490");
          channel.setName(`👤| Members: ${member.guild.memberCount - member.guild.members.filter(m=>m.user.bot).size}`)
      }
	  
	 
	  
  });
;

galaxy.login(process.env.TOKEN_BOT);