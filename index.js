const Discord = require("discord.js");

const TOKEN = "NDU0NjgyOTI4NzY5NjYzMDA3.DfxABA.l13hbB1r309rBb1K6eoJxDfXnD4";
const PREFIX = "-k ";

var bot = new Discord.Client();

//Cuando el bot se inicia
bot.on("ready", function(){
    console.log("Ready");
    bot.user.setActivity("-k Ayuda");
});
//Cuando El bot detecta mensajes
bot.on("message", function(message){
        //Si el que ha mandado un mensaje es el bot, no hace nada.
      if (message.author.equals(bot.user)) return;
     //COMANDOS
        
      if (!message.content.startsWith(PREFIX)) return;

      var args = message.content.substring(PREFIX.length).split(" ");
        
      switch (args[0].toLowerCase())
      { 
        case "presentacion":
        message.channel.send("¡HOLA @everyone ! Soy el kraken, el actual bot supremo de este servidor. Me podréis utilizar (casi) siempre que queráis. A medida que pase el tiempo tendré más utilidades. He sido creado por EG Gamer con ayuda de Aeirety. Un saludo grumetes. Y no os portéis mal, ¡que os llevo a las profunfidades del mar!")
        message.delete();
        break;

        case "ping":
             message.channel.send("Pong!");
             break;   

        case "info":
        message.channel.send("!Soy el Kraken! ¡Soy el guardián de este servidor! He sido creado por **EG Gamer** y **Aeirety**")
        message.delete();
        break;  

        case "ayuda":
       message.channel.send("¿Necesitas mi ayuda? Soy un kraken, no sé si voy a ser de mucha ayuda, pero aquí tienes mi wiki: ```https://github.com/EGGamer/Bot-LKC/wiki```");
       message.delete();
       break;  
/*
        case "reportar":
        if (args[1])
      {
          var embed = new Discord.RichEmbed()
          embed.setTitle("Error Reportado");
          embed.setDescription(" ha reportado un error:" /*+ args);
          embed.setColor(0xef3939);
          m
        }else 
        {
          message.channel.send(message.guild.member + " necesitas describir el error!")
        }
      break;
      */
      case "botinoperativo":
            message.delete();
            if (message.channel.name == "anuncios-server"){
            var embed = new Discord.RichEmbed()
            embed.setColor(0xf85959);     
            embed.setTitle("BOT INOPERATIVO");
            embed.setDescription("El bot no se podrá usar hasta nuevo aviso. @everyone");
            embed.setThumbnail("https://cdn.discordapp.com/avatars/454682928769663007/14ac96f716c195bf55d7373778bd092c.png");
            embed.setTimestamp();
            message.channel.send(embed);
            }
        break;

       case "nuevasreps":
       {  message.delete();
        if (message.channel.name == "reputaciones-actuales"){
          var embed = new Discord.RichEmbed()
          embed.setColor(0x39efbf);
          embed.setTitle("Reputaciones Actuales");
          embed.addField("EG Gamer", "**37**, **37**, **38**, **2**");
          embed.addField("Hyren", "**37**, **39**, **37**, **2**");
          embed.addField("Fran", "**30**, **28**, **27**, **1**");
          embed.addField("Carlis", "**?**, **?**, **?**, **?**");
          embed.addField("Cutu", "**?**, **?**, **?**, **?**");
          embed.setImage("https://i.imgur.com/ypara7v.png");
          message.channel.send(embed);
          }
       }
       break;
        default:
        message.channel.send("```Comando no válido```");
      }

});
bot.login(process.env.TOKEN);
