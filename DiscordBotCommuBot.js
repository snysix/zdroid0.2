

const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = (".");
var commands = new Object();
var token = ('NDMxMDYzNTY2OTk3NjUxNDY4.DaZSvw.Sj_4O_YUIInCwYNCI40Ax5TiloU');

bot.on('ready', () => {
	bot.user.setActivity('OdariaBot - Dev')
	console.log("["+bot.user.tag+"] "+bot.guilds.size+" serveurs, "+bot.users.size+" utilisateurs")
});

bot.on('message', message => {

  	/* DÉTECTION SI LE MESSAGE EST UNE COMMANDE */
	if (message.content.startsWith(prefix)) {
		if(message.author.bot) return; // Empêcher les bots de réaliser des commandes
		try {
			var splited_message = message.content.slice(prefix.length).split(" ");
			var command = splited_message[0];
			var parameters = splited_message.slice(1)
		} catch (error) {
			return
		};
        
        /* LISTE DES COMMANDES */
        try {
			
        	if (["help", "aide", "commands", "cmds"].includes(command)) {
				var embed = new Discord.RichEmbed()
					.setColor(Math.floor((Math.random() * 16777215) + 1)); // Une couleur aléatoire
				try {
				  message.author.send("**Liste de commandes disponnibles :**\n\n .aide » Envoie un message privé avec la liste des commandes", {embed})
				  message.channel.send(":inbox_tray:  Veuillez consulter vos messages privés.")
				} catch (error) {
				  message.channel.send("❌   Impossible de vous envoyer un message privé.")
				} // Intercepte l'erreur si le membre n'est pas joignable
    		}
			
			else if (["info", "bot", "b", "bi", "botinfo"].includes(command)) {
				var embed = new Discord.RichEmbed()
					.setColor(Math.floor((Math.random() * 16777215) + 1)) // Une couleur aléatoire
					.setFooter(message.author.username, message.author.avatarURL)
					.addField("- Informations",
						"**Développeur :** ๖̶̶̶ۣۣۜۜ͜ζ͜͡SnysiX_ シ#7225" + "\n" +
						"**Language - librairie :** NodeJS - discord.js" + "\n" +
						"**Hébergement :** Local"
					);
				message.channel.send("", {embed})
			}
			
			else if (["eval", "exec"].includes(command)) {
				if(message.author.id !== "215634007306534912" && message.author.id !== "370612786906267660") {
					return message.channel.send("❌   Vous n'avez pas la permission d'utiliser cette commande.")
				};
				var code = parameters.join(" ");
				let response = eval(code);
				if (typeof response !== "string") {
					response = require("util").inspect(resp.onse)
				};
				message.channel.send(response)
			}
			
			else if (["say", "repete"].includes(command)) {
				var toRepeat = parameters.join(" ");
				if (toRepeat === "") {
					return message.channel.send("❌   **Utilisation:** "+prefix+"say <message>")
				};
				toRepeat = toRepeat	.replace("@everyone", "@𝅳everyone")
									.replace("@here", "@𝅳here");
            
				message.channel.send(toRepeat);
				message.delete().catch() // Capture l'erreur si jamais une erreur se présente. (aka: manque de permissions)
			}
			
			else if (["whois"].includes(command)) {
				var member = message.author;
				if (parameters.length > 0) { // Recherche d'utilisateurs mentionnés
					let member_got = message.guild.member(message.mentions.users.first() || message.guild.members.get(parameters[0]));
					if (member_got != undefined) {
						var member = member_got.user
					}
				};
				var champ_additions = [];
				var champ_permissions = [];
				var date = member.createdAt;
				var embed = new Discord.RichEmbed()
					.setColor(Math.floor(( Math.random()*16777215 ) + 1))
					.setAuthor(member.tag, member.avatarURL)
					.setFooter(`ID : ${member.id}`)
					.setTitle("Informations")
					.addField(":page_with_curl:  Pseudo :", member.tag, true)
					.addField(":clock10: Création du compte :", date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" à "+date.getHours()+":"+date.getMinutes(), true);
		
		
				if (member.bot) {
					champ_additions[champ_additions.length] = "Robot"
				} else if (member.id === "428600229533843458" || member.id === "215634007306534912") {
					champ_additions[champ_additions.length] = "<:developper:416265704996601876> Apprentisage programation\n Permissions : Administrateur"
				};
				
				if (member.bot) {
					champ_additions[champ_additions.length] = " "				} else if (member.id === "370612786906267660" || member.id === "215634007306534912") {
					champ_additions[champ_additions.length] = ":bank: Rôle Développeur • Créateur\n :trident: Permissions : Administrateur"
				};
				
				if (champ_additions.length > 0) {
					embed.addField(":heavy_plus_sign:  Suplémentaire :", champ_additions.join("\n")) 
				};
				message.channel.send("", {embed})
			}
			
			else if (["announce"].includes(command)) {
				console.log("ERREUR INFINI")
			}
			
			else {
				console.log("[LOG] ["+message.author.tag+"] La commande "+command+" a été éxécutée.")
			}
        } 	

      	catch (error) {
          console.log("[ERREUR] ["+message.author.tag+"] "+message.content)
          console.log(error) // Capturer les erreurs pour garder le bot en ligne 
        }
        
    }
	else {
      	return
    }

    if (message.content.startsWith(prefix + 'annonce')) {
        if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
      return message.reply ("");
      let args = message.content.split(' ')
      args.shift()
      message.channel.send('[**Annonce**] <@&431083966091755522> »\n' + args.join(' '))
      message.delete()
	};
	
	 if (["binfos"].includes(command)) {
				var embed = new Discord.RichEmbed()
					.setColor(Math.floor((Math.random() * 16777215) + 1)) // Une couleur aléatoire
					.setFooter(message.author.username, message.author.avatarURL)
					.addField("- Bot Informations", "Nom : "+bot.user.tag+"\nServeur(s) : "+bot.guilds.size+"\nUtilisateurs : "+bot.users.size+"\nCommandes disponnibles : 4\nMaintenance : OFF\nSalons : "+bot.channels.size+"\n");
				
				message.channel.send("", {embed})
			}
	
		else if (["reload", "rl"].includes(command)) {
				if(message.author.id !== "215634007306534912") {
					return message.channel.send("❌   Vous n'avez pas la permission d'utiliser cette commande.")
				}
				message.channel.send(":arrows_counterclockwise:  Redémarrage en cours...")
				message.edit(":arrows_counterclockwise: Redémarrage terminé !")
			}
			
			else if (["bvn", "bienvenu", "bienvenue"].includes(command)) {
				var embed = new Discord.RichEmbed()
					.setColor(Math.floor((Math.random() * 16777215) + 1)) // Une couleur aléatoire
					.setFooter(message.author.username, message.author.avatarURL)
					.addField(+message.author.tag+ "Vous shouaite la bienvenue.", "--» Pour shouaiter la bienvenue : **.bvn**");
				message.channel.send("", {embed})
			}
			
			else if (["invite", "inv", "invitations", "invitation"].includes(command)) {
				var embed = new Discord.RichEmbed()
					.setColor(Math.floor((Math.random() * 16777215) + 1)) // Une couleur aléatoire
					.setFooter(message.author.username, message.author.avatarURL)
					.addField("- Invitations ", ":ticket:  Nous vous remercions d'avance si vous ajouter le bot n'hésiter pas à nous contacter si vous trouver un problème ou si vous avez des suggestions à faire : devsnysixpro@gmail.com  --» Inviter le bot :\n--» Rejoindre Codage Entreprise :");
				message.channel.send("", {embed})
			}
			
		});
bot.login(token)
