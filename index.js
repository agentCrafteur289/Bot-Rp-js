const Discord = require("discord.js");


const Client = new Discord.Client({
    intents : [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

Client.login("OTMwODk2MjUyNDkxNjY1NDE4.Yd8isQ.hSDBv6oJ9JIgNqg4h76uez0kEAk");

Client.on("ready", () => {
    console.log("Bot Opérationnel !");
    function randomStatus() {
        let status = ["B:help", "Créateur : agentCrafteur289#9117"]
        let rstatus = Math.floor(Math.random() * status.length);

        Client.user.setActivity(status[rstatus], {type: "WATCHING", url: "https://twitch.tv/"});   
    }; setInterval(randomStatus, 3000)
});
 
const prefix = "B:";

    Client.on("message", message => {
        if (message.member.permissions.has("MANAGE_MESSAGES")){
            if(message.content.startsWith(prefix + "clear")){
                let args = message.content.split(" ");
            
                if(args[1] == undefined){
                    message.reply("Nombre de message non ou mal défini.");
                }
                else {
                    let number = parseInt(args[1]);

                    if(isNaN(number)){
                        message.reply("Nombre de message non ou mal définie.");
                    }
                    else{
                        message.channel.bulkDelete(number).then(messages => {
                            console.log("Suppression de " + messages.size + " messages réeussi !"); 
                        }).catch(err => {
                            console.log(" Erreur de clear : " + err);
                        });
                   } 
               }
           }
        }
    });
    

Client.on("messageCreate", message => {
    if (message.author.bot) return;
    
      //pour ecrire une commandes
      if(message.content === prefix + "help"){
          const embed = new Discord.MessageEmbed()
              .setColor("#2c2c31")
              .setTitle("Liste des commandes")
              .setURL("https://discord.gg/7fNfW7HP")
              //.setFooter("Crée par : agentCrafteur289#9117","https://cdn.discordapp.com/attachments/735203876428578837/932698812500308049/tete_en_croix.png")
              .setDescription("Vous y trouverez la liste des commandes :")
              .setThumbnail("https://media.discordapp.net/attachments/911306122110070814/932698269333725264/09AD4098-DCF4-459A-96F7-E0A68905C75F.gif")
              .addField("__Les commandes du BOT :__", "\n - B:eau :cup_with_straw:\n - B:coca :tumbler_glass: \n - B:nouille :ramen:\n - B:dango :dango:\n - B:glace :shaved_ice:\n - B:pizza :pizza:\n - B:crepe :pancakes: \n - B:milkshake :icecream:\n - B:burger :hamburger:\n - B:famichiki :poultry_leg: \n \n **__Admin :__**\n - B:clear :1234:")
              .setAuthor("BOUTIQUE DE SHIBUY𝝠 G𝝠ME・RP", "https://media.discordapp.net/attachments/911306122110070814/932698269333725264/09AD4098-DCF4-459A-96F7-E0A68905C75F.gif" )
              .setTimestamp();
  
              message.channel.send({ embeds: [embed]});
      }
      
      //pour ecrire une seconde commandes
      else if (message.content === prefix + "coca"){ 
        message.channel.bulkDelete(1);
        message.channel.send('https://cdn.discordapp.com/attachments/930570414722273280/930925868975542302/IMG_8813.gif').then((msg) => {
            setTimeout(() => msg.delete(), 10000);
        })
      }
      else if (message.content === prefix + "eau"){ 
          message.channel.bulkDelete(1);
          message.channel.send('https://cdn.discordapp.com/attachments/911306122110070814/933746447965380638/1121_chuhai.png').then((msg) => {
              setTimeout(() => msg.delete(), 10000);
          })
      }

      else if (message.content === prefix + "glace"){ 
        message.channel.bulkDelete(1);
        message.channel.send('https://cdn.discordapp.com/attachments/911306122110070814/934102679326711839/2532-hd-ice-cream.png').then((msg) => {
            setTimeout(() => msg.delete(), 10000);
        })
    }
    else if (message.content === prefix + "nouille"){ 
        message.channel.bulkDelete(1);
        message.channel.send('https://cdn.discordapp.com/attachments/911306122110070814/933746448749707274/2721_wamen_spicy.png').then((msg) => {
            setTimeout(() => msg.delete(), 10000);
        })
    }
    else if (message.content === prefix + "pizza"){ 
        message.channel.bulkDelete(1);
        message.channel.send('https://cdn.discordapp.com/attachments/911306122110070814/933746450028961852/4512-hd-pizza.png').then((msg) => {
            setTimeout(() => msg.delete(), 10000);
        })
    }
    else if (message.content === prefix + "burger"){ 
        message.channel.bulkDelete(1);
        message.channel.send('https://cdn.discordapp.com/attachments/911306122110070814/933746449269813248/2752-hd-hamburguer.png').then((msg) => {
            setTimeout(() => msg.delete(), 10000);
        })
    }
    else if (message.content === prefix + "milk shake"){ 
        message.channel.bulkDelete(1);
        message.channel.send('https://cdn.discordapp.com/attachments/911306122110070814/933746449525669978/2997-kawaii-watermelon-slushie.png').then((msg) => {
            setTimeout(() => msg.delete(), 10000);
        })
    }
    else if (message.content === prefix + "crepe"){ 
        message.channel.bulkDelete(1);
        message.channel.send('https://cdn.discordapp.com/attachments/911306122110070814/933746449802465310/3580-japanesecrepe.png').then((msg) => {
            setTimeout(() => msg.delete(), 10000);
        })
    }
    else if (message.content === prefix + "sushi"){ 
        message.channel.bulkDelete(1);
        message.channel.send('https://cdn.discordapp.com/attachments/911306122110070814/933746450268057600/4541-sushi-nigiri.png').then((msg) => {
            setTimeout(() => msg.delete(), 10000);
        })
    }
    else if (message.content === prefix + "famichiki"){ 
        message.channel.bulkDelete(1);
        message.channel.send('https://cdn.discordapp.com/attachments/911306122110070814/933746515279761448/9952_famichiki.png').then((msg) => {
            setTimeout(() => msg.delete(), 10000);
        })
    }
    else if (message.content === prefix + "dango"){ 
        message.channel.bulkDelete(1);
        message.channel.send('https://cdn.discordapp.com/attachments/911306122110070814/933746455842259004/5681-dango.png').then((msg) => {
            setTimeout(() => msg.delete(), 10000);
        })
    }
    else if (message.content === prefix + "Aggsdgkoze<>ycnbgq45025°6'lmfùFLKKJKJJ<<4W>fjjqlvlb!:;,é'é-ijifsdfnmè!fshjokl,xbpDDDDFh"){ 
        message.channel.bulkDelete(1);
        message.channel.send('°').then((msg) => {
            setTimeout(() => msg.delete(), 10);
            // member.roles.add => ()
        })
    }


  });
  
