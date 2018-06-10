const Discord = require("discord.js");
const configD = require("./node_modules/discord.js/config.json");
const config = require("./node_modules/token/token.json"); //Testing porpouses
const bot = new Discord.Client();
var t = configD.token;
var p = config.token;

bot.on("ready", function(){
    console.log("Ready");
    bot.user.setActivity("-kAyuda");
});

bot.on("message", async message => {
        
      if (message.author.bot) return;
     

        
      if(message.content.indexOf(config.PREFIX)!== 0) return;

      const args = message.content.slice(config.PREFIX.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
 
     
        if(command == "presentacion"){
        message.channel.send("¡HOLA @everyone ! Soy el kraken, el actual bot supremo de este servidor. Me podréis utilizar (casi) siempre que queráis. A medida que pase el tiempo tendré más utilidades. He sido creado por EG Gamer. Un saludo grumetes. Y no os portéis mal, ¡que os llevo a las profunfidades del mar!")
        message.delete();
        }   
        
        if(command === "ping") {
          // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
          // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
          const m = await message.channel.send("Ping?");
          m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
        } 

        if (command === "reset")
        {
          resetBot(message.channel);
        }
        if(command === "info"){
        message.channel.send("!Soy el Kraken! ¡Soy el guardián de este servidor! He sido creado por **EG Gamer**. Podríamos decir que es mi padre, pero... ¿Quién es la madre? :thinking: ")
        message.delete();
        }

        if (command === "ayuda"){
       message.channel.send("¿Necesitas mi ayuda? Soy un kraken, no sé si voy a ser de mucha ayuda, pero aquí tienes mi wiki: ```https://github.com/EGGamer/Bot-LKC/wiki```");
       message.delete();
      }  

        if (command === "reportar"){
        
          var embed = new Discord.RichEmbed()
          embed.setTitle("Error Reportado");
          embed.setDescription(message.author + " ha reportado un error:" + message.content);
          embed.setColor(0xef3939);
          message.channel.send(embed);
          //bot.channels.find("Taberna Secreta de LKC", "reportes").send("hola");
        }
      
      if (command === "botinoperativo"){
            message.delete();
            if (message.channel.name == "anuncios-server"){
            var embed = new Discord.RichEmbed()
            embed.setColor(0xf85959);     
            embed.setTitle("BOT INOPERATIVO");
            embed.setDescription("El bot no se podrá usar hasta nuevo aviso. ");
            embed.setThumbnail("https://cdn.discordapp.com/avatars/454682928769663007/14ac96f716c195bf55d7373778bd092c.png");
            embed.setTimestamp();
            message.channel.send(embed);
            message.channel.send("@everyone");
            }
          }

        if (command === "botoperativo"){
            message.delete();
            if (message.channel.name == "anuncios-server"){
            var embed = new Discord.RichEmbed()
            embed.setColor(0x99f859);     
            embed.setTitle("BOT OPERATIVO");
            embed.setDescription("El bot ya está en funcionamiento.");
            embed.setThumbnail("https://cdn.discordapp.com/avatars/454682928769663007/14ac96f716c195bf55d7373778bd092c.png");
            embed.setTimestamp();
            message.channel.send(embed);
            message.channel.send("@everyone");
            }
          }

       if (command === "nuevasreps"){
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
      }
      
      function resetBot(channel) {
        // send channel a message that you're resetting bot [optional]
        channel.send('Reiniciando bot...')
        .then(msg => bot.destroy())
        console.log("Resseting bot");
        //.then(() => client.login(<your bot token here>));
    }
});










bot.login(process.env.token);//doesnt work
