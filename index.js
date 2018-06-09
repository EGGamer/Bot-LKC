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

        case "reportar":
        if (args[1])
      {
          var embed = new Discord.RichEmbed()
          embed.setTitle("Error Reportado");
          embed.setDescription(" ha reportado un error:" + args);
          embed.setColor(0xef3939);
          message.guild.channels.find("Taberna Secreta de LKC", "reportes").send(args);
        }else 
        {
          message.channel.send(message.guild.member + " necesitas describir el error!")
        }
      break;
      
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
       //E3
       case "e3microsoft":
       message.delete();
       var embed = new Discord.RichEmbed()
       embed.setColor(0x6cbc45);
       embed.setTitle("¡Conferencia de Microsoft!");
       embed.setDescription("Una de las conferencias de hoy es la de Microsoft. Una de las cosas que se presentarán son noticias sobre contenido para Sea of Thieves. la conferencia es a las 22:00 hora España peninsular");
       embed.setThumbnail("https://i.imgur.com/aGczqta.png");
       embed.setImage("https://cdn.discordapp.com/attachments/375828283704475649/454744052034961449/unknown.png");
       message.channel.send(embed);
       break;

       case "e3bethesda":
       message.delete();
       var embed = new Discord.RichEmbed()
       embed.setColor(0xbcaf45);
       embed.setTitle("¡Conferencia de Bethesda!");
       embed.setDescription("Otra de las conferencias de hoy es la de Bethesda. Aunque en españa es a las 3:30/2:30, en el resto de países es hoy. Esperamos que muestren algo sobre Fallout 76 en su conferencia.");
       embed.setThumbnail("https://www.gameit.es/wp-content/uploads/2017/06/Bethesda-933x467.png");
       embed.setImage("https://cdn.discordapp.com/attachments/375828283704475649/454744052034961449/unknown.png");
       message.channel.send(embed);
       break;

       case "e3square":
       message.delete();
       var embed = new Discord.RichEmbed()
       embed.setColor(0x3b3b3b);
       embed.setTitle("¡Conferencia de Squere Enix!");
       embed.setDescription("La primera conferencia de hoy es la de Square Enix. No sabemos que presentarán. La conferencia será a las 19:00 hora España peninsular.");
       embed.setThumbnail("https://vignette.wikia.nocookie.net/nier/images/f/fb/Square_Enix_Logo.png/revision/latest?cb=20170607234547&path-prefix=es");
       embed.setImage("https://cdn.discordapp.com/attachments/375828283704475649/454744052034961449/unknown.png");
       message.channel.send(embed);
       break;

       case "e3bugisoft":
       message.delete();
       var embed = new Discord.RichEmbed()
       embed.setColor(0x4a60a5);
       embed.setTitle("¡Conferencia de Ubisoft!");
       embed.setDescription("La segunda conferencia de hoy es de Ubisoft. Sabremos que enseñarán algo del nuevo Assasins Creed. La conferencia es a las 22:00 hora España peninsular.");
       embed.setThumbnail("https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Ubisoft_2017.svg/1200px-Ubisoft_2017.svg.png");
       embed.setImage("https://cdn.discordapp.com/attachments/375828283704475649/454744052034961449/unknown.png");
       message.channel.send(embed);
       break;

       case "e3pcgaming":
       message.delete();
       var embed = new Discord.RichEmbed()
       embed.setColor(0xaa0000);
       embed.setTitle("¡Conferencia de PC Gaming!");
       embed.setDescription("La tercera conferencia de hoy es de PC Gaming. No sabremos que presentarán. La conferencia empieza a las 00:00 hora españa peninsular.");
       embed.setThumbnail("https://storage.googleapis.com/improbable-cms-json/production/wp-uploads/2016/12/PCG_Logo_HiRes.png");
       embed.setImage("https://cdn.discordapp.com/attachments/375828283704475649/454744052034961449/unknown.png");
       message.channel.send(embed);
       break;

       case "e3sony":
       message.delete();
       var embed = new Discord.RichEmbed()
       embed.setColor(0x273acb);
       embed.setTitle("¡Conferencia de Sony!");
       embed.setDescription("La última conferencia de hoy es de Sony. ¿Presentarán algo sobre la nueva Play Station? La conferencia comienza a las 3:00 hora España peninsular.");
       embed.setThumbnail("http://www.pilasybateriasuniversales.com/img/cms/sony_logo_PNG2.png");
       embed.setImage("https://cdn.discordapp.com/attachments/375828283704475649/454744052034961449/unknown.png");
       message.channel.send(embed);
       break;

       case "e3nintendo":
       message.delete();
       var embed = new Discord.RichEmbed()
       embed.setColor(0xff0000);
       embed.setTitle("¡Nintendo Direct E3!");
       embed.setDescription("La última `Conferencia´ del E3 es el Nintendo Direct de Nintendo (valga la redundancia). Será un E3 de 30 minuticos, en el cual esperamos que presenten el nuevo Super Smash Bros, para Nintendo Switch. La hora es a als 18:00 hora España peninsular.");
       embed.setThumbnail("http://logok.org/wp-content/uploads/2014/12/Nintendo-logo-red.png");
       embed.setImage("https://cdn.discordapp.com/attachments/375828283704475649/454744052034961449/unknown.png");
       message.channel.send(embed);
       break;

        default:
        message.channel.send("```Comando no válido```");
      }

      

});
bot.login(process.env.TOKEN);
