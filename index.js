const Discord = require("discord.js"), bot = new Discord.Client(), prefix = "Rb/";

console.log("[!] Starting bot...");

const commands = {
    help: {
        process: function(e, o, i) {
            i.setDescription([ "```perl", "!Rb/help #Sends this help message", "!Rb/join #Join to your voice channel", "!Rb/leave #Exit the voice channel", "!Rb/play + radio name #select a radio", "!Rb/list #list all radio```", "I'm **Rbot**, a radio bot. I'm developed by ankonymous, this bot is inspired by baba-radio" ]), 
            i.setAuthor("Command list!", "https://cdn.discordapp.com/attachments/330739726321713153/451061091322298378/jajajaxdxdxd.png"), 
            i.setColor("#b92727"), e.author.send({
                embed: i
            });
        }
    },
    leave: {
        process: function(e, o, i) {
            if (!e.member.hasPermission("MANAGE_GUILD")) return e.channel.send("You do not have sufficient permissions.");
            e.member.voiceChannel.leave(), i.setColor("#b92727"), i.setDescription("Bye !"), 
            e.channel.send({
                embed: i
            });
        }
    },
    invite: {
        process: function(e, o, i) {
            i.setDescription([ "`Copy this url :", "`https://discordapp.com/oauth2/authorize?client_id=560179137499889687&scope=bot&permissions=2146958847`" ]), 
            i.setAuthor("Invite link:"), i.setColor("#b92727"), e.author.send({
                embed: i
            });
        }
    },
    play: {
        process: function(e, o, i) {
            if (!e.member.voiceChannel) return e.channel.send("You are not on a voice channel.");
            if (!e.member.voiceChannel.joinable) return e.channel.send("I'm unable to play music in this channel.");
            if (!o) return i.setDescription("• Insert a correct radio to play.\n\n Available radios with the command `Rb/list`"), 
            i.setColor("#b92727"), e.channel.send({
                embed: i
            });
            if ("radio libertaire" == o.toLowerCase()) var a = "http://163.172.94.169:8080/radiolib";
            o.toLowerCase();
            a = "http://media.autorouteinfo.fr:8000/direct_nord.mp3";
            o.toLowerCase();
            a = "http://media.autorouteinfo.fr:8000/direct_sud.mp3";
            if ("espace fm" == o.toLowerCase()) a = "http://listen.radioking.com/radio/16769/stream/49487";
            if ("evasion fm" == o.toLowerCase()) a = "http://stream1.evasionfm.com/Paris";
            if ("evryone" == o.toLowerCase()) a = "http://streaming.evryone.com:8000/evryone-low.mp3";
            if ("handi fm" == o.toLowerCase()) a = "   http://webradio.netfinity.fr:8000/handifm";
            o.toLowerCase();
            a = "http://live.idfm98.fr:8000/idfm2";
            if ("idfm" == o.toLowerCase()) a = "http://live.idfm98.fr:8000/idfm2";
            if ("mouv" == o.toLowerCase()) a = "http://direct.mouv.fr/live/mouv-midfi.mp3";
            if ("lfm" == o.toLowerCase()) a = "http://str0.creacast.com/lfm";
            if ("marmite fm" == o.toLowerCase()) a = "http://stream.votreradiosurlenet.eu/marmitefm.mp3";
            if ("m radio" == o.toLowerCase()) a = "http://mfm.ice.infomaniak.ch/mfm-128.mp3";
            if ("music box" == o.toLowerCase()) a = "http://10278.go2stream.fr:8000/stream";
            if ("neo" == o.toLowerCase()) a = "http://stream.radioneo.org:8000/;chat.mp3";
            if ("radio bpm" == o.toLowerCase()) a = "http://str20.creacast.com/bpm";
            if ("radio campus paris" == o.toLowerCase()) a = "http://www.radiocampusparis.org:8000/stream_rcp";
            if ("radio courtoisie" == o.toLowerCase()) a = "http://radiocourtoisie.nex-informatique.com/;stream.nsv";
            if ("radio cristal" == o.toLowerCase()) a = "http://radiocristal.ice.infomaniak.ch/radiocristal-high.mp3";
            if ("ici et maintenant" == o.toLowerCase()) a = "http://radio.rim952.fr:8000/stream.mp3";
            if ("radio j" == o.toLowerCase()) a = "http://radioj.hbgt.infoclip.fr:8000/radioj";
            o.toLowerCase();
            a = "http://149.202.186.135/MANGEMBOFM";
            if ("radio mille pattes" == o.toLowerCase()) a = "http://millepattes.ice.infomaniak.ch/millepattes-high.mp3";
            if ("radio notre-dame" == o.toLowerCase()) a = "http://windu.radionotredame.net/RadioNotreDame-Fm.mp3";
            if ("radio orient" == o.toLowerCase()) a = "http://stream3.broadcast-associes.com:8405/Radio-Orient";
            if ("radio rezo" == o.toLowerCase()) a = "http://radioefm.bcast.infomaniak.ch:8000/radioefm-high.mp3";
            if ("radio soleil" == o.toLowerCase()) a = "http://radiosoleil.ice.infomaniak.ch/radiosoleil-96.mp3";
            if ("radio sunce" == o.toLowerCase()) a = "http://62.210.214.106:8002/;stream.nsv";
            if ("radio vexin" == o.toLowerCase()) a = "http://rvvs.ice.infomaniak.ch/rvvs-64.aac";
            o.toLowerCase();
            a = "http://str0.creacast.com/radio-rcj";
            o.toLowerCase();
            a = "http://str31.creacast.com/rve";
            o.toLowerCase();
            a = "http://start-adofm.ice.infomaniak.ch/start-adofm-high.mp3";
            if ("tropiques fm" == o.toLowerCase()) a = "http://listen.radioking.com/radio/8916/stream/19088";
            if ("urban hit" == o.toLowerCase()) a = "http://onlyrai.ice.infomaniak.ch/onlyrai-high.aac";
            if ("vibration" == o.toLowerCase()) a = "http://vibration.ice.infomaniak.ch/vibration-high.mp3";
            if ("vivre fm" == o.toLowerCase()) a = "http://vivrefm.ice.infomaniak.ch/vivrefm-128.mp3";
            if ("voltage" == o.toLowerCase()) a = "http://start-voltage.ice.infomaniak.ch/start-voltage-high.mp3";
            if ("alternative fm" == o.toLowerCase()) a = "http://live140.impek.com:9978/;flash.mp3";
            if ("77 fm" == o.toLowerCase()) a = "http://91.121.150.196:8000/;stream.mp3";
            if ("generation" == o.toLowerCase()) a = "http://generationfm.ice.infomaniak.ch/generationfm-high.mp3";
            if ("frequence protestante" == o.toLowerCase()) a = "http://stream2.broadcast-associes.com:9000/Frequence-Protestante";
            o.toLowerCase();
            a = "http://francemaghreb2.ice.infomaniak.ch/francemaghreb2-high.mp3";
            if ("france maghreb" == o.toLowerCase()) a = "http://francemaghreb2.ice.infomaniak.ch/francemaghreb2-high.mp3";
            if ("france bleu" == o.toLowerCase()) a = "http://stream1.chantefrance.com/Chante_France";
            if ("beur fm" == o.toLowerCase()) a = "http://broadcast.infomaniak.ch/beurfm-high.mp3";
            if ("ayp fm" == o.toLowerCase()) a = "http://stric6.streamakaci.com/radioayp.mp3";
            if ("aligre fm" == o.toLowerCase()) a = "http://sv3.vestaradio.com:8000/aligrefm";
            if ("africa n1" == o.toLowerCase()) a = "http://african1paris.ice.infomaniak.ch/african1paris-128.mp3";
            if ("skyrock" == o.toLowerCase()) a = "http://icecast.skyrock.net/s/natio_aac_64k";
            if ("nrj" == o.toLowerCase()) a = "http://cdn.nrjaudio.fm/audio1/fr/40101/aac_576.mp3";
            if ("rfm" == o.toLowerCase()) a = "http://rfm-live-mp3-128.scdn.arkena.com/rfm.mp3";
            if ("nostalgie" == o.toLowerCase()) a = "http://cdn.nrjaudio.fm/audio1/fr/30601/mp3_128.mp3";
            if ("virgin radio" == o.toLowerCase()) a = "http://vr-live-aac-64.scdn.arkena.com/virginradio.aac";
            if ("cherie fm" == o.toLowerCase()) a = "http://cdn.nrjaudio.fm/audio1/fr/30201/mp3_128.mp3";
            if ("rmc" == o.toLowerCase()) a = "http://chai5she.cdn.dvmr.fr/rmcinfo";
            if ("rires et chansons" == o.toLowerCase()) a = "http://185.52.127.163/fr/30401/mp3_128.mp3";
            if ("fun radio" == o.toLowerCase()) a = "http://icecast.funradio.fr/fun-1-48-72.aac";
            if ("rtl 2" == o.toLowerCase()) a = "http://icecast.rtl2.fr/rtl2-1-48-72.aac";
            if ("rtl" == o.toLowerCase()) a = "http://icecast.rtl.fr/rtl-1-48-72.aac";
            if ("radio latina" == o.toLowerCase()) a = "http://broadcast.infomaniak.net/start-latina-high.aac";
            if ("radio nova" == o.toLowerCase()) a = "http://broadcast.infomaniak.net/radionova.aac";
            if ("radio fg" == o.toLowerCase()) a = "http://radiofg.impek.com/fg";
            if ("europe 1" == o.toLowerCase()) a = "http://mp3lg4.tdf-cdn.com/9240/lag_180945.mp3";
            if ("bfm Business" == o.toLowerCase()) a = "http://bfmbusiness.cdn.dvmr.fr/bfmbusiness";
            if ("fip" == o.toLowerCase()) a = "http://chai5she.cdn.dvmr.fr/fip-midfi.mp3";
            if ("tsf jazz" == o.toLowerCase()) a = "http://tsfjazz.ice.infomaniak.ch/tsfjazz-high.mp3";
            if ("radio classique" == o.toLowerCase()) a = "http://radioclassique.ice.infomaniak.ch/radioclassique-high.mp3";
            if ("france musique" == o.toLowerCase()) a = "http://chai5she.cdn.dvmr.fr/francemusique-midfi.mp3";
            if ("france culture" == o.toLowerCase()) a = "http://chai5she.cdn.dvmr.fr/franceculture-midfi.mp3";
            if ("france info" == o.toLowerCase()) a = "http://chai5she.cdn.dvmr.fr/franceinfo-midfi.mp3";
            if ("france inter" == o.toLowerCase()) a = "http://chai5she.cdn.dvmr.fr/franceinter-midfi.mp3";
            if ("beur fm" != o.toLowerCase()) return i.setDescription("• Insert a correct radio to play.\n\n`[-]` Available radios `with the command Rb/list`"), 
            i.setColor("#b92727"), e.channel.send({
                embed: i
            });
            e.member.voiceChannel.join().then(t => {
                require("http").get(a, a => {
                    t.playStream(a), i.setColor("#b92727"), i.setDescription("Correctly playing " + o.toLowerCase()), 
                    e.channel.send({
                        embed: i
                    });
                });
            }).catch(e => "**Error:** ```\n" + e + "```");
        }
    },
    list: {
        process: function(e, o, i) {
            i.setDescription([ "```perl", "75 radios available :", "radio libertaire,", "france inter,", "france info,", "france culture,", "france musique,", "radio classique,", "tsf jazz,", "fip,", "bfm Business,", "europe 1,", "radio fg,", "radio nova,", "radio latina,", "rtl,", "rtl 2,", "fun radio,", "rires et chansons,", "rmc,", "cherie fm,", "virgin radio,", "nostalgie,", "rfm,", "nrj,", "skyrock,", "africa n1,", "aligre fm,", "ayp fm,", "beur fm,", "chante france,", "france bleu,", "france maghreb,", "frequence paris plurielle (or fpp),", "frequence protestante,", "generation,", "77 fm,", "alternative fm,", "voltage,", "vivre fm,", "vibration,", "urban hit,", "tropiques fm,", "ado fm (or swigg),", "radio vielle eglise (or rve),", "radio de la communaute juive (or rcj),", "radio vexin,", "radio sunce,", "radi soleil,", "radio rezo,", "radio orient,", "radio notre-dame,", "radio mille pattes,", "mangembo fm (or mng),", "radio j,", "ici et maintenant,", "radio cristal,", "radio courtoisie,", "radio campus paris,", "radio bpm,", "oui fm,", "neo,", "music box,", "m radio,", "marmite fm,", "lfm,", "mouv,", "idfm,", "horizon fm (or la radio sans pub),", "handi fm,", "evryone,", "evasion fm,", "espace fm,", "beur fm,", "autoroute info nord (or ain),", "autoroute info sud (or ais).```" ]), 
            i.setColor("#b92727"), e.author.send({
                embed: i
            });
        }
    },
    fr: {
        process: function(e, o, i) {
            i.setDescription([ "```perl", "yes there are just french radio because I'm french.```" ]), 
            i.setColor("#b92727"), e.author.send({
                embed: i
            });
        }
    }
};

bot.on("ready", function() {
    console.log("[*] Logged in " + bot.guilds.array().length + " servers !"), setInterval(function() {
        bot.user.setActivity("Rb/help");
    }, 1e5);
}), bot.on("message", function(e) {
    if (0 === e.content.indexOf("Rb/")) {
        console.log(`(${e.guild}) ${e.author.tag}: ${e.content}`);
        const o = e.content.split(" ")[0].substring("Rb/".length), i = e.content.substring(o.length + "Rb/".length + 1), a = new Discord.RichEmbed();
        if (!commands[o]) return;
        try {
            commands[o].process(e, i, a);
        } catch (o) {
            e.channel.send({
                embed: {
                    description: "**Error:** ```\n" + o + "```",
                    color: 16711680
                }
            });
        }
    }
}), bot.login("process.TOKEN");
