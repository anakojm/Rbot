const Discord = require("discord.js"), bot = new Discord.Client(), prefix = "Rb/";

console.log("[!] Starting bot...");

const commands = {
    help: {
        process: function(e, t, r) {
            r.setDescription([ "```perl", "Rb/help #Envoyer ce message", "Rb/leave #Quitter le salon vocal", "Rb/play + nomderadio #jouer une radio", "Rb/list #Lister toutes les radios```", "Je suis **Rbot**, un bot radio. Je suis développé par anakojm" ]), 
            r.setAuthor("Command list!", "https://cdn.discordapp.com/attachments/330739726321713153/451061091322298378/jajajaxdxdxd.png"), 
            r.setColor("#b92727"), e.author.send({
                embed: r
            }), e.react("📩");
        }
    },
    leave: {
        process: function(e, t, r) {
            if (!e.member.hasPermission("MANAGE_GUILD")) return e.channel.send("Tu n'a pas assez de permission");
            e.member.voiceChannel.leave(), r.setColor("#b92727"), r.setDescription("Bye !"), 
            e.channel.send({
                embed: r
            });
        }
    },
    play: {
        process: function(e, t, r) {
            return e.member.voiceChannel ? e.member.voiceChannel.joinable ? t ? void ("radio libertaire" == t.toLowerCase() ? e.member.voiceChannel.join().then(t => {
                require("http").get("http://163.172.94.169:8080/radiolib", n => {
                    t.playStream(n), r.setColor("#b92727"), r.setDescription("Correctement joué radio libertaire"), 
                    e.channel.send({
                        embed: r
                    });
                });
            }) : "france inter" == t.toLowerCase() ? e.member.voiceChannel.join().then(t => {
                require("http").get("http://chai5she.cdn.dvmr.fr/franceinter-midfi.mp3", n => {
                    t.playStream(n), r.setColor("#b92727"), r.setDescription("Correctement joué france inter"), 
                    e.channel.send({
                        embed: r
                    });
                });
            }) : "france info" == t.toLowerCase() ? e.member.voiceChannel.join().then(t => {
                require("http").get("http://chai5she.cdn.dvmr.fr/franceinfo-midfi.mp3", n => {
                    t.playStream(n), r.setColor("#b92727"), r.setDescription("Correctement joué france info"), 
                    e.channel.send({
                        embed: r
                    });
                });
            }) : "france culture" == t.toLowerCase() ? e.member.voiceChannel.join().then(t => {
                require("http").get("http://chai5she.cdn.dvmr.fr/franceculture-midfi.mp3", n => {
                    t.playStream(n), r.setColor("#b92727"), r.setDescription("Correctement joué france culture"), 
                    e.channel.send({
                        embed: r
                    });
                });
            }) : "france musique" == t.toLowerCase() ? e.member.voiceChannel.join().then(t => {
                require("http").get("http://chai5she.cdn.dvmr.fr/francemusique-midfi.mp3", n => {
                    t.playStream(n), r.setColor("#b92727"), r.setDescription("Correctement joué france musique"), 
                    e.channel.send({
                        embed: r
                    });
                });
            }) : "radio classique" == t.toLowerCase() ? e.member.voiceChannel.join().then(t => {
                require("http").get("http://radioclassique.ice.infomaniak.ch/radioclassique-high.mp3", n => {
                    t.playStream(n), r.setColor("#b92727"), r.setDescription("Correctement joué radio classique"), 
                    e.channel.send({
                        embed: r
                    });
                });
            }) : "tsf jazz" == t.toLowerCase() ? e.member.voiceChannel.join().then(t => {
                require("http").get("http://tsfjazz.ice.infomaniak.ch/tsfjazz-high.mp3", n => {
                    t.playStream(n), r.setColor("#b92727"), r.setDescription("Correctement joué tsf jazz"), 
                    e.channel.send({
                        embed: r
                    });
                });
            }) : "fip" == t.toLowerCase() ? e.member.voiceChannel.join().then(t => {
                require("http").get("http://chai5she.cdn.dvmr.fr/fip-midfi.mp3", n => {
                    t.playStream(n), r.setColor("#b92727"), r.setDescription("Correctement joué fip"), 
                    e.channel.send({
                        embed: r
                    });
                });
            }) : "bfm Business" == t.toLowerCase() ? e.member.voiceChannel.join().then(t => {
                require("http").get("http://bfmbusiness.cdn.dvmr.fr/bfmbusiness", n => {
                    t.playStream(n), r.setColor("#b92727"), r.setDescription("Correctement joué bfm Business"), 
                    e.channel.send({
                        embed: r
                    });
                });
            }) : "europe 1" == t.toLowerCase() ? e.member.voiceChannel.join().then(t => {
                require("http").get("http://mp3lg4.tdf-cdn.com/9240/lag_180945.mp3", n => {
                    t.playStream(n), r.setColor("#b92727"), r.setDescription("Correctement joué europe 1"), 
                    e.channel.send({
                        embed: r
                    });
                });
            }) : "radio fg" == t.toLowerCase() ? e.member.voiceChannel.join().then(t => {
                require("http").get("http://radiofg.impek.com/fg", n => {
                    t.playStream(n), r.setColor("#b92727"), r.setDescription("Correctement joué radio fg"), 
                    e.channel.send({
                        embed: r
                    });
                });
            }) : "radio nova" == t.toLowerCase() ? e.member.voiceChannel.join().then(t => {
                require("http").get("http://broadcast.infomaniak.net/radionova.aac", n => {
                    t.playStream(n), r.setColor("#b92727"), r.setDescription("Correctement joué radio nova"), 
                    e.channel.send({
                        embed: r
                    });
                });
            }) : "radio latina" == t.toLowerCase() ? e.member.voiceChannel.join().then(t => {
                require("http").get("http://broadcast.infomaniak.net/start-latina-high.aac", n => {
                    t.playStream(n), r.setColor("#b92727"), r.setDescription("Correctement joué radio latina"), 
                    e.channel.send({
                        embed: r
                    });
                });
            }) : "rtl" == t.toLowerCase() ? e.member.voiceChannel.join().then(t => {
                require("http").get("http://icecast.rtl.fr/rtl-1-48-72.aac", n => {
                    t.playStream(n), r.setColor("#b92727"), r.setDescription("Correctement joué rtl"), 
                    e.channel.send({
                        embed: r
                    });
                });
            }) : "rtl 2" == t.toLowerCase() ? e.member.voiceChannel.join().then(t => {
                require("http").get("http://icecast.rtl2.fr/rtl2-1-48-72.aac", n => {
                    t.playStream(n), r.setColor("#b92727"), r.setDescription("Correctement joué rtl 2"), 
                    e.channel.send({
                        embed: r
                    });
                });
            }) : "fun radio" == t.toLowerCase() ? e.member.voiceChannel.join().then(t => {
                require("http").get("http://icecast.funradio.fr/fun-1-48-72.aac", n => {
                    t.playStream(n), r.setColor("#b92727"), r.setDescription("Correctement joué fun radio"), 
                    e.channel.send({
                        embed: r
                    });
                });
            }) : "rires et chansons" == t.toLowerCase() ? e.member.voiceChannel.join().then(t => {
                require("http").get("http://185.52.127.163/fr/30401/mp3_128.mp3", n => {
                    t.playStream(n), r.setColor("#b92727"), r.setDescription("Correctement joué rires et chansons"), 
                    e.channel.send({
                        embed: r
                    });
                });
            }) : "rmc" == t.toLowerCase() ? e.member.voiceChannel.join().then(t => {
                require("http").get("http://chai5she.cdn.dvmr.fr/rmcinfo", n => {
                    t.playStream(n), r.setColor("#b92727"), r.setDescription("Correctement joué rmc"), 
                    e.channel.send({
                        embed: r
                    });
                });
            }) : "cherie fm" == t.toLowerCase() ? e.member.voiceChannel.join().then(t => {
                require("http").get("http://cdn.nrjaudio.fm/audio1/fr/30201/mp3_128.mp3", n => {
                    t.playStream(n), r.setColor("#b92727"), r.setDescription("Correctement joué cherie fm"), 
                    e.channel.send({
                        embed: r
                    });
                });
            }) : "virgin radio" == t.toLowerCase() ? e.member.voiceChannel.join().then(t => {
                require("http").get("http://vr-live-aac-64.scdn.arkena.com/virginradio.aac", n => {
                    t.playStream(n), r.setColor("#b92727"), r.setDescription("Correctement joué virgin radio"), 
                    e.channel.send({
                        embed: r
                    });
                });
            }) : "nostalgie" == t.toLowerCase() ? e.member.voiceChannel.join().then(t => {
                require("http").get("http://cdn.nrjaudio.fm/audio1/fr/30601/mp3_128.mp3", n => {
                    t.playStream(n), r.setColor("#b92727"), r.setDescription("Correctement joué nostalgie"), 
                    e.channel.send({
                        embed: r
                    });
                });
            }) : "rfm" == t.toLowerCase() ? e.member.voiceChannel.join().then(t => {
                require("http").get("http://rfm-live-mp3-128.scdn.arkena.com/rfm.mp3", n => {
                    t.playStream(n), r.setColor("#b92727"), r.setDescription("Correctement joué rfm"), 
                    e.channel.send({
                        embed: r
                    });
                });
            }) : "nrj" == t.toLowerCase() ? e.member.voiceChannel.join().then(t => {
                require("http").get("http://cdn.nrjaudio.fm/audio1/fr/40101/aac_576.mp3", n => {
                    t.playStream(n), r.setColor("#b92727"), r.setDescription("Correctement joué nrj"), 
                    e.channel.send({
                        embed: r
                    });
                });
            }) : "skyrock" == t.toLowerCase() ? e.member.voiceChannel.join().then(t => {
                require("http").get("http://icecast.skyrock.net/s/natio_aac_64k", n => {
                    t.playStream(n), r.setColor("#b92727"), r.setDescription("Correctement joué skyrock"), 
                    e.channel.send({
                        embed: r
                    });
                });
            }) : "africa n1" == t.toLowerCase() ? e.member.voiceChannel.join().then(t => {
                require("http").get("http://african1paris.ice.infomaniak.ch/african1paris-128.mp3", n => {
                    t.playStream(n), r.setColor("#b92727"), r.setDescription("Correctement joué africa n1"), 
                    e.channel.send({
                        embed: r
                    });
                });
            }) : "aligre fm" == t.toLowerCase() ? e.member.voiceChannel.join().then(t => {
                require("http").get("http://sv3.vestaradio.com:8000/aligrefm", n => {
                    t.playStream(n), r.setColor("#b92727"), r.setDescription("Correctement joué aligre fm"), 
                    e.channel.send({
                        embed: r
                    });
                });
            }) : "ayp fm" == t.toLowerCase() ? e.member.voiceChannel.join().then(t => {
                require("http").get("http://stric6.streamakaci.com/radioayp.mp3", n => {
                    t.playStream(n), r.setColor("#b92727"), r.setDescription("Correctement joué ayp fm"), 
                    e.channel.send({
                        embed: r
                    });
                });
            }) : "beur fm" == t.toLowerCase() ? e.member.voiceChannel.join().then(t => {
                require("http").get("http://broadcast.infomaniak.ch/beurfm-high.mp3", n => {
                    t.playStream(n), r.setColor("#b92727"), r.setDescription("Correctement joué beur fm"), 
                    e.channel.send({
                        embed: r
                    });
                });
            }) : "chante france" == t.toLowerCase() ? e.member.voiceChannel.join().then(t => {
                require("http").get("http://stream1.chantefrance.com/Chante_France", n => {
                    t.playStream(n), r.setColor("#b92727"), r.setDescription("Correctement joué chante france"), 
                    e.channel.send({
                        embed: r
                    });
                });
            }) : "france bleu" == t.toLowerCase() ? e.member.voiceChannel.join().then(t => {
                require("http").get("http://chai5she.cdn.dvmr.fr/fb1071-midfi.mp3", n => {
                    t.playStream(n), r.setColor("#b92727"), r.setDescription("Correctement joué france bleu"), 
                    e.channel.send({
                        embed: r
                    });
                });
            }) : "france maghreb" == t.toLowerCase() ? e.member.voiceChannel.join().then(t => {
                require("http").get("http://francemaghreb2.ice.infomaniak.ch/francemaghreb2-high.mp3", n => {
                    t.playStream(n), r.setColor("#b92727"), r.setDescription("Correctement joué france maghreb"), 
                    e.channel.send({
                        embed: r
                    });
                });
            }) : (t.toLowerCase(), e.member.voiceChannel.join().then(t => {
                require("http").get("http://francemaghreb2.ice.infomaniak.ch/francemaghreb2-high.mp3", n => {
                    t.playStream(n), r.setColor("#b92727"), r.setDescription("Correctement joué fpp"), 
                    e.channel.send({
                        embed: r
                    });
                });
            }))) : (r.setDescription("• Radio non disponible\n\n`[-]` Radios disponibles `avec la commande Rb/list`"), 
            r.setColor("#b92727"), e.channel.send({
                embed: r
            })) : e.channel.send("I'm unable to play music in this channel.") : e.channel.send("You are not on a voice channel.");
        }
    },
    list: {
        process: function(e, t, r) {
            r.setDescription([ "```perl", "75 radios disponibles :", "radio libertaire,", "france inter,", "france info,", "france culture,", "france musique,", "radio classique,", "tsf jazz,", "fip,", "bfm Business,", "europe 1,", "radio fg,", "radio nova,", "radio latina,", "rtl,", "rtl 2,", "fun radio,", "rires et chansons,", "rmc,", "cherie fm,", "virgin radio,", "nostalgie,", "rfm,", "nrj,", "skyrock,", "africa n1,", "aligre fm,", "ayp fm,", "beur fm,", "chante france,", "france bleu,", "france maghreb,", "frequence paris plurielle (ou fpp),", "frequence protestante,", "generation,", "77 fm,", "alternative fm,", "voltage,", "vivre fm,", "vibration,", "urban hit,", "tropiques fm,", "ado fm (ou swigg),", "radio vielle eglise (ou rve),", "radio de la communaute juive (ou rcj),", "radio vexin,", "radio sunce,", "radi soleil,", "radio rezo,", "radio orient,", "radio notre-dame,", "radio mille pattes,", "mangembo fm (ou mng),", "radio j,", "ici et maintenant,", "radio cristal,", "radio courtoisie,", "radio campus paris,", "radio bpm,", "oui fm,", "neo,", "music box,", "m radio,", "marmite fm,", "lfm,", "mouv,", "idfm,", "horizon fm (ou la radio sans pub),", "handi fm,", "evryone,", "evasion fm,", "espace fm,", "beur fm,", "autoroute info nord (ou ain),", "autoroute info sud (ou ais).```" ]), 
            r.setColor("#b92727"), e.author.send({
                embed: r
            }), e.react("📩");
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
        const t = e.content.split(" ")[0].substring("Rb/".length), r = e.content.substring(t.length + "Rb/".length + 1), n = new Discord.RichEmbed();
        if (!commands[t]) return;
        try {
            commands[t].process(e, r, n);
        } catch (t) {
            e.channel.send({
                embed: {
                    description: "**Error:** ```\n" + t + "```",
                    color: 16711680
                }
            });
        }
    }
}),
bot.login("process.TOKEN");
