const Discord = require("discord.js");
const client = new Discord.Client();
const ytdl = require('ytdl-core');

var isReady = true

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if(isReady){
		if (msg.author.bot) return;
		else if (msg.content.match("%helpstp") || msg.content.match("%HelpStp") || msg.content.match("%HELPSTP")) {
		msg.channel.send("Debrouille toi wallah.\n");
		}
		else if (msg.content.match("%help") || msg.content.match("%Help") || msg.content.match("%HELP")) {
		msg.channel.send("Il manque quelquechose...");
		}
		else if (msg.content.match("%tchou") || msg.content.match("%Tchou") || msg.content.match("%TCHOU")) {
		msg.channel.send("TCHOU TCHOU !");
		}
		else if (msg.content.match("%Tristan") || msg.content.match("%tristan") || msg.content.match("%TRISTAN")) {
		  msg.channel.send('MIGHTY DICTIONARY : TRISTAN = Receleur de films d\'animation et homosexuel reconnu.');
		}
		else if (msg.content.match("%Tom") || msg.content.match("%tom") || msg.content.match("%TOM")){
		  msg.channel.send('MIGHTY DICTIONARY : TOM = Entité supérieure, dieu des trains.');
		}
		else if (msg.content.match("%Tigrou") || msg.content.match("%tigrou") || msg.content.match("%TIGROU") || msg.content.match("%Tigrouneee") || msg.content.match("%tigrouneee") || msg.content.match("%TIGROUNEEE")){
		  msg.channel.send('MIGHTY DICTIONARY : TIGROU = Dictateur du serv d\'à coté.');
		}
		else if (msg.content.match("%Dodi") || msg.content.match("%dodi") || msg.content.match("%DODI") || msg.content.match("%Elodie") || msg.content.match("%elodie") || msg.content.match("%ELODIE")){
		  msg.channel.send("MIGHTY DICTIONARY : compte mega.nz :  id : https://www.youtube.com/watch?v=NTSl9DDvf4E 6:09 0:14 4:59 4:41 7:37 6:26 0:51 3:11 5:52 2:36 @trash-mail.com  mdp : 99 50 108 55 101 51 98 56 111 57 110 52 109 56 100 55 112 57 -> D3");
		}
		else if (msg.content.match("%Loli") || msg.content.match("%loli") || msg.content.match("%LOLI")){
		  msg.channel.send("MIGHTY DICTIONARY : FBI OPEN UP !!!");
		}
		else if (msg.content.match("%Gp") || msg.content.match("%gp") || msg.content.match("%GP") || msg.content.match("%GpatrouV2nom") || msg.content.match("%gpatrouV2nom") || msg.content.match("%GPATROUV2NOM")){
		  msg.channel.send('MIGHTY DICTIONARY : GPATROUV2N0M = Memeur et troll de renommé');
		}
		else if (msg.content.match("%Brigitte") || msg.content.match("%brigitte") || msg.content.match("%BRIGITTE")){
		  msg.channel.send('MIGHTY DICTIONARY : SALOPE DE BRIGITTE !');
		}
		else if (msg.content.match("%Wednesday") || msg.content.match("%wednesday") || msg.content.match("%WEDNESDAY")){
			isReady = false;
			var channel = msg.member.voiceChannel;
			if(channel){
				if(permissionsFor(msg.client.user).has("CONNECT") && permissionsFor(msg.client.user).has("SPEAK")){
					var connection = channel.join();
					const dispatcher = connection
						.play("https://www.youtube.com/watch?v=du-TY1GUFGk")
						.on("finish", () => {
							channel.leave();
						})
						.on("error", error => console.error(error));
				}
				else{
					msg.channel.send("gngngngn j'ai pas les droits gngngn...");
				}
			}
			else{
				msg.channel.send("mais t'es ou ? PAS LA !");
			}
			isReady = true;
		}
		else if (msg.content.startsWith("non toi") || msg.content.startsWith("Non toi") || msg.content.startsWith("no u") || msg.content.startsWith("No u")){
		  msg.delete();
		  msg.channel.send('no u ∞');
		}
		else if (msg.content.startsWith("mais") || msg.content.startsWith("Mais") || msg.content.startsWith("MAIS")){
		  msg.delete();
		  msg.channel.send('ya pas de mais');
		}
		else if (msg.content.startsWith("arrete") || msg.content.startsWith("Arrete") || msg.content.startsWith("ARRETE") || msg.content.startsWith("arrête") || msg.content.startsWith("Arrête") || msg.content.startsWith("ARRÊTE")){
		  msg.delete();
		  msg.channel.send('ya pas d\'arrete ! J\'la mange l\'auto !');
		}
		else if (msg.content.startsWith("t'es ") || msg.content.startsWith("T'es ") || msg.content.startsWith("tu es ") || msg.content.startsWith("Tu es ") || msg.content.startsWith("T ") || msg.content.startsWith("t ")) {
		if (msg.content.match("moche") || msg.content.match("mosh") || msg.content.match("débile") || msg.content.match("nul ") || msg.content.match("con ") || msg.content.match("merde") || msg.content.match("gay") || msg.content.match("juif") || msg.content.match("pd") || msg.content.match("Homo") || msg.content.match("homo")){
			if (msg.content.match("pas ")){
				msg.channel.send('Thx bro #NoHomo');
			}
			else{
				msg.channel.send('no u');
			}
		}
		else if (msg.content.match("beau") || msg.content.match("gentils") || msg.content.match("intelligent") || msg.content.match("fort ") || msg.content.match("musclé")){
			if (msg.content.match("pas ")){
				msg.channel.send('no u');
			}
			else{
				msg.channel.send('Thx bro #NoHomo');
			}
		}
		}
		else if (msg.content.endsWith(" ou ?") || msg.content.endsWith(" ou?") || msg.content.endsWith(" où ?") || msg.content.endsWith(" où?")) {
		msg.channel.send("dtc");
		}
		if(msg.member.roles.has('419631397414633472')) {
		  msg.react('414176136713732116');
		}
		if(msg.member.roles.has('414176878119616512')) {
		  msg.react('404412871733149696');
		}
		if (msg.content.match("di")) {
		  let msgg = msg.toString();
		  var ide = msgg.indexOf("di");
		  let msgc = msgg.substring(ide+2,msgg.length);
		  msg.channel.send( JSON.stringify(msgc) , { tts: true })
		}
		if (msg.content.match("Di")) {
		  let msgg = msg.toString();
		  var ide = msgg.indexOf("Di");
		  let msgc = msgg.substring(ide+2,msgg.length);
		  msg.channel.send( JSON.stringify(msgc) , { tts: true })
		}
		if (msg.content.match("cri")) {
		  let msgg = msg.toString();
		  var ide = msgg.indexOf("cri");
		  let msgc = msgg.substring(ide+3,msgg.length);
		  msg.channel.send( JSON.stringify(msgc)+" !" , { tts: true })
		}
		if (msg.content.match("Cri")) {
		  let msgg = msg.toString();
		  var ide = msgg.indexOf("Cri");
		  let msgc = msgg.substring(ide+3,msgg.length);
		  msg.channel.send( JSON.stringify(msgc)+" !" , { tts: true })
		}
	}
});

client.login(process.env.BOT_TOKEN);
