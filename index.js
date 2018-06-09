const Discord = require("discord.js");

const TOKEN = "NDU0NjgyOTI4NzY5NjYzMDA3.DfxABA.l13hbB1r309rBb1K6eoJxDfXnD4";
const PREFIX = "-k ";

var bot = new Discord.Client();

bot.on("ready", function(){
    console.log("Ready");
    bot.user.setActivity("-k Ayuda");
});

bot.on("message", function(message){

      if (message.author.equals(bot.user)) return;

      if (!message.content.startsWith(PREFIX)) return;

      var args = message.content.substring(PREFIX.length).split(" ");

      switch (args[0].toLowerCase())
      {
        case "ping":
             message.channel.send("Pong!");
             break;
        case "info":
        message.channel.send("!Soy el Kraken! ¡Soy el guardián de este servidor! He sido creado por **EG Gamer** y **Aeirety**")
        break;
       case "ayuda":
       message.channel.send("¿Necesitas mi ayuda? Soy un kraken, no si si voy a ser de mucha ayuda, pero aquí tienes los comandos disponibles: ```-k info | -k ayuda | -k ping```");
       break;
       case "botinoperativo":
       {
           var embed = new Discord.RichEmbed()
           embed.setColor(0xf85959);     
           embed.setTitle("BOT INOPERATIVO");
           embed.setDescription("El bot no se podrá usar hasta nuevo aviso. @everyone");
           
           embed.setTimestamp();
           message.channel.send(embed);
       }
       break;
        default:
        message.channel.send("```Comando no válido```");
      }
});
bot.login(TOKEN);
