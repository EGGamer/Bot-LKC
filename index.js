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
        //Si el mensaje no empieza por el prefix, no hace nada.
      if (!message.content.startsWith(PREFIX)) return;

      var args = message.content.substring(PREFIX.length).split(" ");
        //Aqui pasa todo a minuscula
      switch (args[0].toLowerCase())
      { //Si pone "-k ping" responde "Pong!""
        case "ping":
             message.channel.send("Pong!");
             break;
        //Si pone "-k info" salta un mensaje con info del bot.       
        case "info":
        message.channel.send("!Soy el Kraken! ¡Soy el guardián de este servidor! He sido creado por **EG Gamer** y **Aeirety**")
        break;
        //Si pide ayuda se la da.
        case "ayuda":
       message.channel.send("¿Necesitas mi ayuda? Soy un kraken, no si si voy a ser de mucha ayuda, pero aquí tienes los comandos disponibles: ```-k info | -k ayuda | -k ping```");
       break;
       //En caso de que el bot esté inoperativo
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
       //Si no es ninguno de los anteriores comandos pone Comando Invalido.
        default:
        message.channel.send("```Comando no válido```");
      }
});
bot.login(TOKEN);
