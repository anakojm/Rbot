const Discord = require("discord.js"),
    bot = new Discord.Client(),
    prefix = "Rb/";

console.log("[!] Starting bot...");

const commands = {
    help: {
        process: function(e, t, r) {
            r.setDescription(["```perl", "Rb/help #Envoyer ce message", "Rb/leave #Quitter le salon vocal", "Rb/play + nomderadio #jouer une radio", "Rb/list #Lister toutes les radios```", "Je suis **Rbot**, un bot radio. Je suis développé par anakojm, vous pouvez trouver mon code source ici : https://github.com/anakojm/Rbot et m'inviter avec ce lien: https://discord.com/oauth2/authorize?response_type=code&client_id=560179137499889687&scope=bot&permission=8&redirect_uri=https://github.com/anakojm/Rbot"]),
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
    "play": {
        process: function(msg, suffix, embed) {
            if (!msg.member.voiceChannel) return msg.channel.send('You are not on a voice channel.');
            if (!msg.member.voiceChannel.joinable) return msg.channel.send("I'm unable to play music in this channel.");
            if (!suffix) {
                embed.setDescription("• Radio non disponible\n\n`[-]` Radios disponibles `avec la commande Rb/list`");
                embed.setColor("#b92727");
                return msg.channel.send({
                    embed
                });
            }
            if (suffix.toLowerCase() == "radio libertaire") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://163.172.94.169:8080/radiolib", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué radio libertaire");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "france inter") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://chai5she.cdn.dvmr.fr/franceinter-midfi.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué france inter");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "france info") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://chai5she.cdn.dvmr.fr/franceinfo-midfi.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué france info");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "france culture") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://chai5she.cdn.dvmr.fr/franceculture-midfi.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué france culture");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "france musique") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://chai5she.cdn.dvmr.fr/francemusique-midfi.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué france musique");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "radio classique") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://radioclassique.ice.infomaniak.ch/radioclassique-high.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué radio classique");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "tsf jazz") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://tsfjazz.ice.infomaniak.ch/tsfjazz-high.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué tsf jazz");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "fip") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://chai5she.cdn.dvmr.fr/fip-midfi.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué fip");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "bfm Business") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://bfmbusiness.cdn.dvmr.fr/bfmbusiness", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué bfm Business");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "europe 1") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://mp3lg4.tdf-cdn.com/9240/lag_180945.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué europe 1");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "radio fg") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://radiofg.impek.com/fg", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué radio fg");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "radio nova") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://broadcast.infomaniak.net/radionova.aac", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué radio nova");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "radio latina") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://broadcast.infomaniak.net/start-latina-high.aac", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué radio latina");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "rtl") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://icecast.rtl.fr/rtl-1-48-72.aac", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué rtl");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "rtl 2") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://icecast.rtl2.fr/rtl2-1-48-72.aac", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué rtl 2");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "fun radio") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://icecast.funradio.fr/fun-1-48-72.aac", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué fun radio");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "rires et chansons") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://185.52.127.163/fr/30401/mp3_128.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué rires et chansons");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "rmc") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://chai5she.cdn.dvmr.fr/rmcinfo", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué rmc");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "cherie fm") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://cdn.nrjaudio.fm/audio1/fr/30201/mp3_128.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué cherie fm");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "virgin radio") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://vr-live-aac-64.scdn.arkena.com/virginradio.aac", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué virgin radio");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "nostalgie") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://cdn.nrjaudio.fm/audio1/fr/30601/mp3_128.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué nostalgie");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "rfm") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://rfm-live-mp3-128.scdn.arkena.com/rfm.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué rfm");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "nrj") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://cdn.nrjaudio.fm/audio1/fr/40101/aac_576.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué nrj");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "skyrock") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://icecast.skyrock.net/s/natio_aac_64k", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué skyrock");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "africa n1") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://african1paris.ice.infomaniak.ch/african1paris-128.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué africa n1");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "aligre fm") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://sv3.vestaradio.com:8000/aligrefm", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué aligre fm");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "ayp fm") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://stric6.streamakaci.com/radioayp.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué ayp fm");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "beur fm") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://broadcast.infomaniak.ch/beurfm-high.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué beur fm");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "chante france") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://stream1.chantefrance.com/Chante_France", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué chante france");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "france bleu") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://chai5she.cdn.dvmr.fr/fb1071-midfi.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué france bleu");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "france maghreb") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://francemaghreb2.ice.infomaniak.ch/francemaghreb2-high.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué france maghreb");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "frequence paris plurielle") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué fpp");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "frequence protestante") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://stream2.broadcast-associes.com:9000/Frequence-Protestante", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué frequence protestante");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "generation") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://generationfm.ice.infomaniak.ch/generationfm-high.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué generation");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "77 fm") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://91.121.150.196:8000/;stream.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué 77 fm");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "alternative fm") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://live140.impek.com:9978/;flash.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué alternative fm");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "voltage") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://start-voltage.ice.infomaniak.ch/start-voltage-high.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué voltage");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "vivre fm") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://vivrefm.ice.infomaniak.ch/vivrefm-128.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué vivre fm");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "vibration") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://vibration.ice.infomaniak.ch/vibration-high.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué vibration");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "urban hit") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://onlyrai.ice.infomaniak.ch/onlyrai-high.aac", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué urban hit");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "tropiques fm") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://listen.radioking.com/radio/8916/stream/19088", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué tropiques fm");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "swigg") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://start-adofm.ice.infomaniak.ch/start-adofm-high.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué ado fm");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "radio vielle eglise") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://str31.creacast.com/rve", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué rve");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "radio de la communaute juive") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://str0.creacast.com/radio-rcj", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué rcj");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "radio vexin") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://rvvs.ice.infomaniak.ch/rvvs-64.aac", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué radio vexin");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "radio sunce") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://62.210.214.106:8002/;stream.nsv", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué radio sunce");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "radio soleil") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://radiosoleil.ice.infomaniak.ch/radiosoleil-96.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué radio soleil");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "radio rezo") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://radioefm.bcast.infomaniak.ch:8000/radioefm-high.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué radio rezo");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "radio orient") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://stream3.broadcast-associes.com:8405/Radio-Orient", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué radio orient");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "radio notre-dame") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://windu.radionotredame.net/RadioNotreDame-Fm.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué radio notre-dame");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "radio mille pattes") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://millepattes.ice.infomaniak.ch/millepattes-high.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué radio mille pattes");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "mangembo fm") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://149.202.186.135/MANGEMBOFM", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué mng");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "radio j") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://radioj.hbgt.infoclip.fr:8000/radioj", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué radio j");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "ici et maintenant") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://radio.rim952.fr:8000/stream.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué ici et maintenant");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "radio cristal") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://radiocristal.ice.infomaniak.ch/radiocristal-high.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué radio cristal");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "radio courtoisie") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://radiocourtoisie.nex-informatique.com/;stream.nsv", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué radio courtoisie");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "radio campus paris") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://www.radiocampusparis.org:8000/stream_rcp", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué radio campus paris");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "radio bpm") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://str20.creacast.com/bpm", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué radio bpm");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "oui fm") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://stream.ouifm.fr/ouifm-hd.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué oui fm");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "neo") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://stream.radioneo.org:8000/;chat.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué neo");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "music box") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://10278.go2stream.fr:8000/stream", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué music box");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "m radio") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://mfm.ice.infomaniak.ch/mfm-128.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué m radio");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "marmite fm") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://stream.votreradiosurlenet.eu/marmitefm.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué marmite fm");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "lfm") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://str0.creacast.com/lfm", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué lfm");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "mouv") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://direct.mouv.fr/live/mouv-midfi.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué mouv");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "idfm") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://live.idfm98.fr:8000/idfm2", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué idfm");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "horizon fm") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://live.idfm98.fr:8000/idfm2", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué horizon fm");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "andi fm") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://webradio.netfinity.fr:8000/handifm", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué andi fm");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "evryone") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://streaming.evryone.com:8000/evryone-low.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué evryone");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "evasion fm") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://stream1.evasionfm.com/Paris", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué evasion fm");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "espace fm") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://listen.radioking.com/radio/16769/stream/49487", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué espace fm");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "beur fm") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://broadcast.infomaniak.ch/beurfm-high.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué beur fm");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "autoroute info nord") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get("http://media.autorouteinfo.fr:8000/direct_nord.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué ain");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else if (suffix.toLowerCase() == "autoroute info sud") {
                msg.member.voiceChannel.join().then(connection => {
                    require('http').get(" http://media.autorouteinfo.fr:8000/direct_sud.mp3", (res) => {
                        connection.playStream(res);
                        embed.setColor("#b92727");
                        embed.setDescription("Correctement joué ais");
                        msg.channel.send({
                            embed
                        });
                    });
                });
            } else {
                embed.setDescription("• Radio non disponible\n\n`[-]` Radios disponibles `avec la commande Rb/list`");
                embed.setColor("#b92727");
                return msg.channel.send({
                    embed
                });
            }
        }
    },


    list: {
        process: function(e, t, r) {
            r.setDescription(["```perl", "75 radios disponibles :", "radio libertaire,", "france inter,", "france info,", "france culture,", "france musique,", "radio classique,", "tsf jazz,", "fip,", "bfm Business,", "europe 1,", "radio fg,", "radio nova,", "radio latina,", "rtl,", "rtl 2,", "fun radio,", "rires et chansons,", "rmc,", "cherie fm,", "virgin radio,", "nostalgie,", "rfm,", "nrj,", "skyrock,", "africa n1,", "aligre fm,", "ayp fm,", "beur fm,", "chante france,", "france bleu,", "france maghreb,", "frequence paris plurielle (ou fpp),", "frequence protestante,", "generation,", "77 fm,", "alternative fm,", "voltage,", "vivre fm,", "vibration,", "urban hit,", "tropiques fm,", "ado fm (ou swigg),", "radio vielle eglise (ou rve),", "radio de la communaute juive (ou rcj),", "radio vexin,", "radio sunce,", "radi soleil,", "radio rezo,", "radio orient,", "radio notre-dame,", "radio mille pattes,", "mangembo fm (ou mng),", "radio j,", "ici et maintenant,", "radio cristal,", "radio courtoisie,", "radio campus paris,", "radio bpm,", "oui fm,", "neo,", "music box,", "m radio,", "marmite fm,", "lfm,", "mouv,", "idfm,", "horizon fm (ou la radio sans pub),", "handi fm,", "evryone,", "evasion fm,", "espace fm,", "beur fm,", "autoroute info nord (ou ain),", "autoroute info sud (ou ais).```"]),
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
            const t = e.content.split(" ")[0].substring("Rb/".length),
                r = e.content.substring(t.length + "Rb/".length + 1),
                n = new Discord.RichEmbed();
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
