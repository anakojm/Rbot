const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix= 'Rb/'
console.log("[!] Starting bot...");

// Commands
const commands = {
	"help": {
		process: function (msg, suffix, embed) {
			const list = ["```perl",
			"!Rb/help #Sends this help message",
			"!Rb/join #Join to your voice channel",
			"!Rb/leave #Exit the voice channel",
			"!Rb/play + radio name #select a radio",
			"!Rb/list #list all radio```",
			"I'm **Rbot**, a radio bot. I'm developed by ankonymous, this bot is inspired by baba-radio"] 
			embed.setDescription(list);
			embed.setAuthor("Command list!", "https://cdn.discordapp.com/attachments/330739726321713153/451061091322298378/jajajaxdxdxd.png");
			embed.setColor("#b92727");
			msg.author.send({ embed });
		}
  	},
	"leave": {
		process: function (msg, suffix, embed) {
			if (!msg.member.hasPermission("MANAGE_GUILD")) return msg.channel.send("You do not have sufficient permissions.");
			msg.member.voiceChannel.leave()
			
				embed.setColor("#b92727");
				embed.setDescription("Bye !");
				msg.channel.send({ embed });	
				
		}
},
"invite": {
	process: function (msg, suffix, embed) {
	
		const list =
		["`Copy this url :",
			"`https://discordapp.com/oauth2/authorize?client_id=560179137499889687&scope=bot&permissions=2146958847`"] 
		embed.setDescription(list);
		embed.setAuthor("Invite link:");
		embed.setColor("#b92727");
		msg.author.send({ embed });
	}
},
"play": {
		process: function (msg, suffix, embed) {
			if (!msg.member.voiceChannel) return msg.channel.send('You are not on a voice channel.');
			if (!msg.member.voiceChannel.joinable) return msg.channel.send("I'm unable to play music in this channel.");
			if (!suffix) {
				embed.setDescription("• Insert a correct radio to play.\n\n Available radios with the command `Rb/list`");
				embed.setColor("#b92727");
				return msg.channel.send({ embed });
			}			
			 if (suffix.toLowerCase() == "radio libertaire") {
				var radio = "http://163.172.94.169:8080/radiolib";
			}  if (suffix.toLowerCase() == "autoroute info nord","ain") {
				var radio = "http://media.autorouteinfo.fr:8000/direct_nord.mp3";
			}  if (suffix.toLowerCase() == "autoroute info sud","ais") {
				var radio = "http://media.autorouteinfo.fr:8000/direct_sud.mp3";
			}  if (suffix.toLowerCase() == "espace fm") {
				var radio = "http://listen.radioking.com/radio/16769/stream/49487";
			} if (suffix.toLowerCase() == "evasion fm") {
				var radio = "http://stream1.evasionfm.com/Paris";
			} if (suffix.toLowerCase() == "evryone") {
				var radio = "http://streaming.evryone.com:8000/evryone-low.mp3";
			} if (suffix.toLowerCase() == "handi fm") {
				var radio = "   http://webradio.netfinity.fr:8000/handifm";
			} if (suffix.toLowerCase() == "horizon fm","la radio sans pub") {
				var radio = "http://live.idfm98.fr:8000/idfm2";
			} if (suffix.toLowerCase() == "idfm") {
				var radio = "http://live.idfm98.fr:8000/idfm2";
			} if (suffix.toLowerCase() == "mouv") {
				var radio = "http://direct.mouv.fr/live/mouv-midfi.mp3";
			} if (suffix.toLowerCase() == "lfm") {
				var radio = "http://str0.creacast.com/lfm";
			} if (suffix.toLowerCase() == "marmite fm") {
				var radio = "http://stream.votreradiosurlenet.eu/marmitefm.mp3";
			} if (suffix.toLowerCase() == "m radio") {
				var radio = "http://mfm.ice.infomaniak.ch/mfm-128.mp3";
			} if (suffix.toLowerCase() == "music box") {
				var radio = "http://10278.go2stream.fr:8000/stream";
			} if (suffix.toLowerCase() == "neo") {
				var radio = "http://stream.radioneo.org:8000/;chat.mp3";
			} if (suffix.toLowerCase() == "radio bpm") {
				var radio = "http://str20.creacast.com/bpm";
			} if (suffix.toLowerCase() == "radio campus paris") {
				var radio = "http://www.radiocampusparis.org:8000/stream_rcp";
			} if (suffix.toLowerCase() == "radio courtoisie") {
				var radio = "http://radiocourtoisie.nex-informatique.com/;stream.nsv";
			} if (suffix.toLowerCase() == "radio cristal") {
				var radio = "http://radiocristal.ice.infomaniak.ch/radiocristal-high.mp3";
			} if (suffix.toLowerCase() == "ici et maintenant") {
				var radio = "http://radio.rim952.fr:8000/stream.mp3";
			} if (suffix.toLowerCase() == "radio j") {
				var radio= "http://radioj.hbgt.infoclip.fr:8000/radioj";
			} if (suffix.toLowerCase() == "mng","mangembo fm") {
				var radio ="http://149.202.186.135/MANGEMBOFM";
			}  if (suffix.toLowerCase() == "radio mille pattes") {
				var radio= "http://millepattes.ice.infomaniak.ch/millepattes-high.mp3";
			}  if (suffix.toLowerCase() == "radio notre-dame") {
				var radio= "http://windu.radionotredame.net/RadioNotreDame-Fm.mp3";
			}  if (suffix.toLowerCase() == "radio orient") {
				var radio= "http://stream3.broadcast-associes.com:8405/Radio-Orient";
			}  if (suffix.toLowerCase() == "radio rezo") {
				var radio= "http://radioefm.bcast.infomaniak.ch:8000/radioefm-high.mp3";
			}  if (suffix.toLowerCase() == "radio soleil") {
				var radio ="http://radiosoleil.ice.infomaniak.ch/radiosoleil-96.mp3";
			}  if (suffix.toLowerCase() == "radio sunce") {
				var radio ="http://62.210.214.106:8002/;stream.nsv";
			}  if (suffix.toLowerCase() == "radio vexin") {
				var radio ="http://rvvs.ice.infomaniak.ch/rvvs-64.aac";
			}  if (suffix.toLowerCase() == "rcj","radio de la communaute juive") {
				var radio = "http://str0.creacast.com/radio-rcj";
			}  if (suffix.toLowerCase() == "radio vielle eglise","rve") {
				var radio = "http://str31.creacast.com/rve";
			}  if (suffix.toLowerCase() == "swigg","ado fm") {
				var radio = "http://start-adofm.ice.infomaniak.ch/start-adofm-high.mp3";
			}  if (suffix.toLowerCase() == "tropiques fm") {
				var radio = "http://listen.radioking.com/radio/8916/stream/19088";
			}  if (suffix.toLowerCase() == "urban hit") {
				var radio = "http://onlyrai.ice.infomaniak.ch/onlyrai-high.aac";
			}  if (suffix.toLowerCase() == "vibration") {
				var radio = "http://vibration.ice.infomaniak.ch/vibration-high.mp3";
			}  if (suffix.toLowerCase() == "vivre fm") {
				var radio = "http://vivrefm.ice.infomaniak.ch/vivrefm-128.mp3";
			}  if (suffix.toLowerCase() == "voltage") {
				var radio = "http://start-voltage.ice.infomaniak.ch/start-voltage-high.mp3";
			}  if (suffix.toLowerCase() == "alternative fm") {
				var radio = "http://live140.impek.com:9978/;flash.mp3";
			}  if (suffix.toLowerCase() == "77 fm") {
				var radio = "http://91.121.150.196:8000/;stream.mp3";
			}  if (suffix.toLowerCase() == "generation") {
				var radio = "http://generationfm.ice.infomaniak.ch/generationfm-high.mp3";
			}  if (suffix.toLowerCase() == "frequence protestante") {
				var radio = "http://stream2.broadcast-associes.com:9000/Frequence-Protestante";
			}  if (suffix.toLowerCase() == "frequence paris plurielle","fpp") {
				var radio = "http://francemaghreb2.ice.infomaniak.ch/francemaghreb2-high.mp3";
			}  if (suffix.toLowerCase() == "france maghreb") {
				var radio = "http://francemaghreb2.ice.infomaniak.ch/francemaghreb2-high.mp3";
			}  if (suffix.toLowerCase() == "france bleu") {
				var radio = "http://stream1.chantefrance.com/Chante_France";
			}  if (suffix.toLowerCase() == "beur fm") {
				var radio = "http://broadcast.infomaniak.ch/beurfm-high.mp3";
			}  if (suffix.toLowerCase() == "ayp fm") {
				var radio = "http://stric6.streamakaci.com/radioayp.mp3";
			}  if (suffix.toLowerCase() == "aligre fm") {
				var radio = "http://sv3.vestaradio.com:8000/aligrefm";
			}  if (suffix.toLowerCase() == "africa n1") {
				var radio = "http://african1paris.ice.infomaniak.ch/african1paris-128.mp3";
			}  if (suffix.toLowerCase() == "skyrock") {
				var radio = "http://icecast.skyrock.net/s/natio_aac_64k";
			}  if (suffix.toLowerCase() == "nrj") {
				var radio = "http://cdn.nrjaudio.fm/audio1/fr/40101/aac_576.mp3";
			}  if (suffix.toLowerCase() == "rfm") {
				var radio = "http://rfm-live-mp3-128.scdn.arkena.com/rfm.mp3";
			}  if (suffix.toLowerCase() == "nostalgie") {
				var radio = "http://cdn.nrjaudio.fm/audio1/fr/30601/mp3_128.mp3";
			}  if (suffix.toLowerCase() == "virgin radio") {
				var radio = "http://vr-live-aac-64.scdn.arkena.com/virginradio.aac";
			}  if (suffix.toLowerCase() == "cherie fm") {
				var radio = "http://cdn.nrjaudio.fm/audio1/fr/30201/mp3_128.mp3";
			}  if (suffix.toLowerCase() == "rmc") {
				var radio = "http://chai5she.cdn.dvmr.fr/rmcinfo";
			}  if (suffix.toLowerCase() == "rires et chansons") {
				var radio = "http://185.52.127.163/fr/30401/mp3_128.mp3";
			}  if (suffix.toLowerCase() == "fun radio") {
				var radio = "http://icecast.funradio.fr/fun-1-48-72.aac";
			}  if (suffix.toLowerCase() == "rtl 2") {
				var radio = "http://icecast.rtl2.fr/rtl2-1-48-72.aac";
			}  if (suffix.toLowerCase() == "rtl") {
				var radio = "http://icecast.rtl.fr/rtl-1-48-72.aac";
			}  if (suffix.toLowerCase() == "radio latina") {
				var radio = "http://broadcast.infomaniak.net/start-latina-high.aac";
			}  if (suffix.toLowerCase() == "radio nova") {
				var radio = "http://broadcast.infomaniak.net/radionova.aac";
			} if (suffix.toLowerCase() == "radio fg") {
				var radio = "http://radiofg.impek.com/fg";
			}  if (suffix.toLowerCase() == "europe 1") {
				var radio = "http://mp3lg4.tdf-cdn.com/9240/lag_180945.mp3";
			} if (suffix.toLowerCase() == "bfm Business") {
				var radio = "http://bfmbusiness.cdn.dvmr.fr/bfmbusiness";
			} if (suffix.toLowerCase() == "fip") {
				var radio = "http://chai5she.cdn.dvmr.fr/fip-midfi.mp3";
			} if (suffix.toLowerCase() == "tsf jazz") {
				var radio = "http://tsfjazz.ice.infomaniak.ch/tsfjazz-high.mp3";
			} if (suffix.toLowerCase() == "radio classique") {
				var radio = "http://radioclassique.ice.infomaniak.ch/radioclassique-high.mp3";
			} if (suffix.toLowerCase() == "france musique") {
				var radio = "http://chai5she.cdn.dvmr.fr/francemusique-midfi.mp3";
			} if (suffix.toLowerCase() == "france culture") {
				var radio = "http://chai5she.cdn.dvmr.fr/franceculture-midfi.mp3";
			} if (suffix.toLowerCase() == "france info") {
				var radio = "http://chai5she.cdn.dvmr.fr/franceinfo-midfi.mp3";
			} if (suffix.toLowerCase() == "france inter") {
				var radio = "http://chai5she.cdn.dvmr.fr/franceinter-midfi.mp3";
			} if (suffix.toLowerCase() == "beur fm") {
				const radio = "http://broadcast.infomaniak.ch/beurfm-high.mp3";
			} else {
				embed.setDescription("• Insert a correct radio to play.\n\n`[-]` Available radios `with the command Rb/list`");
				embed.setColor("#b92727");
				return msg.channel.send({ embed });
			}
				msg.member.voiceChannel.join().then(connection => {
				require('http').get(radio, (res) => {
					connection.playStream(res);
					embed.setColor("#b92727");
					embed.setDescription("Correctly playing "+suffix.toLowerCase());
					msg.channel.send({ embed });
				});
			}).catch(err => "**Error:** ```\n" + err + "```");
			}
},
	
"list"	: {
    process: function (msg, suffix, embed) {
        const list = ["```perl",
        "75 radios available :",
	"radio libertaire,",
	"france inter,",
	"france info,",
	"france culture,",
	"france musique,",
	"radio classique,",
	"tsf jazz,",
	"fip,",
	"bfm Business,",
	"europe 1,",
	"radio fg,",
	"radio nova,",
	"radio latina,",
	"rtl,",
	"rtl 2,",
	"fun radio,",
	"rires et chansons,",
	"rmc,",
	"cherie fm,",
	"virgin radio,",
	"nostalgie,",
	"rfm,",
	"nrj,",
	"skyrock,",
	"africa n1,",
	"aligre fm,",
	"ayp fm,",
	"beur fm,",
	"chante france,",
	"france bleu,",
	"france maghreb,",
	"frequence paris plurielle (or fpp),",
	"frequence protestante,",
	"generation,",
	"77 fm,",
	"alternative fm,",
	"voltage,",
	"vivre fm,",
	"vibration,",
	"urban hit,",
	"tropiques fm,",
	"ado fm (or swigg),",
	"radio vielle eglise (or rve),",
	"radio de la communaute juive (or rcj),",
	"radio vexin,",
	"radio sunce,",
	"radi soleil,",
	"radio rezo,",
	"radio orient,",
	"radio notre-dame,",
	"radio mille pattes,",
	"mangembo fm (or mng),",
	"radio j,",
	"ici et maintenant,",
	"radio cristal,",
	"radio courtoisie,",
	"radio campus paris,",
	"radio bpm,",
	"oui fm,",
	"neo,",
	"music box,",
	"m radio,",
	"marmite fm,",
	"lfm,",
	"mouv,",
	"idfm,",
	"horizon fm (or la radio sans pub),",
	"handi fm,",
	"evryone,",
	"evasion fm,",
	"espace fm,",
	"beur fm,",
	"autoroute info nord (or ain),",
	"autoroute info sud (or ais).```",] 
        embed.setDescription(list);
        embed.setColor("#b92727");
        msg.author.send({ embed });
    }
},
"fr"	: {
		process: function (msg, suffix, embed) {
			const list = ["```perl",
			"yes there are just french radio because I'm french.```",] 
			embed.setDescription(list);
			embed.setColor("#b92727");
			msg.author.send({ embed });
		}
	  }
};

// Ready Event
bot.on("ready", function () {
	console.log("[*] Logged in " + bot.guilds.array().length + " servers !");
	setInterval(function() {
  		bot.user.setActivity(prefix + "help");
  	}, 100000)
});

// Command System
bot.on('message', function (msg) {
	if (msg.content.indexOf(prefix) === 0) {
		console.log(`(${msg.guild}) ${msg.author.tag}: ${msg.content}`); // Command logger

      		const command = msg.content.split(" ")[0].substring(prefix.length); // Command
      		const suffix = msg.content.substring(command.length + prefix.length + 1); // Arguments
      		const embed = new Discord.RichEmbed(); // Gets Rich Embed

      		if (!commands[command]) return; // Return if the command doesn't exists
      		try {
			commands[command].process(msg, suffix, embed); // Execute the command
      		} catch(err) { // Catch an error
        		msg.channel.send({embed: {"description": "**Error:** ```\n" + err + "```", "color": 0xff0000}});
      		}
	}
});

bot.login('process.TOKEN');
