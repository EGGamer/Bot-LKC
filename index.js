const Discord = require("discord.js");

const TOKEN = "NDU0OTg3NzcyMTI2ODIyNDIw.Df1b5g.1v7Vjhj85qiGNdcMUVUx7KZlxNk";
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
        message.channel.send("¡HOLA @everyone ! Soy el kraken, el actual bot supremo de este servidor. Me podréis utilizar (casi) siempre que queráis. A medida que pase el tiempo tendré más utilidades. He sido creado por EG Gamer. Un saludo grumetes. Y no os portéis mal, ¡que os llevo a las profunfidades del mar!")
        message.delete();
        break;

        case "ping":
             message.channel.send("Pong!");
             break;   

        case "info":
        message.channel.send("!Soy el Kraken! ¡Soy el guardián de este servidor! He sido creado por **EG Gamer**. Podríamos decir que es mi padre, pero... ¿Quién es la madre? :thinking: ")
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

       case "infoe3":
       message.delete();
       var embed = new Discord.RichEmbed()
       embed.setColor(0xe73d2f);
       embed.setTitle("¡Comienza el E3 2018!");
       embed.setDescription("El E3 ya está aquí, desde hoy día 9 de junio hasta el día 12 serán las conferencias. Iremos avisando sobre cuando empieza cada conferencia.");
       embed.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/b/b0/E3_Logo.png");
       embed.setImage("https://cdn.discordapp.com/attachments/375828283704475649/454744052034961449/unknown.png");
       message.channel.send(embed);
       break;
        default:
        message.channel.send("```Comando no válido```");
      }

});
bot.login(process.env.TOKEN);
