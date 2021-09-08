const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = 'bot.';
const token = process.env.TOKEN;
const Jimp = require('jimp');
const fs = require('fs');


bot.on('ready', () => {
        console.log('This bot is online!');
        bot.user.setActivity('Spinning');
    });
    bot.on('message', message => {
        if (message.content === 'bot.check') message.reply('Bot Working');
        if (message.content === 'bot.spin') message.reply('https://images-ext-1.discordapp.net/external/RtttAlEwiykZ1JS8zYwyUiFDT3zjtfsXrNZT9IiU-tY/https/gyazo.com/cfcecff3bd5602bb1af7f7c9f52d5cef.gif');
        if(message.content === 'bot.hand') message.reply(':handshake:');
        if(message.content === 'bot.merch') message.reply('Merch is gay');
        if(message.content === 'bot.slushy') message.channel.send('Astralis Slushy question mark ????!?!?!?');
        if(message.content === 'bot.steep') message.channel.send('Steep is a fucking sheep');
        if(message.content === 'bot.SwiFT RC Bot') message.reply('Hey there');
        if(message.content === 'bot.weebs') message.channel.send('<@&539891051947753473> easy tag gay secret k-pop fans')
        if(message.content === 'bot.commands') message.channel.send('**Current Commands:** *check ,spin,hand,merch,slushy,steep,merch spin(without bot.),weebs,commands*')
        if(message.content === 'merch spin') message.channel.send('Merch do be spinning')
        
        if (message.content === 'bot.avatar') {
          message.channel.send(`**This is your avi:**`)
          let targetMember;
          targetMember = message.author;
    
          let avatarEmbed = new Discord.MessageEmbed()
              .setImage(targetMember.displayAvatarURL())
              .setColor(targetMember.displayHexColor)
              message.channel.send(avatarEmbed)
        };
        if(message.content === 'bot.lanz') message.channel.send('<@381282700289638410> grats lanz to pulse btw');
    });
    bot.on('message', message => {
        if (message.channel.type == "dm") {
                if(message.author.id !== '466666919995637762') {
                message.author.send("Message Delivered to the Owners anonymously");
            let messageEmbed = new Discord.MessageEmbed ()
                .setColor(0x00ff00)
                .setTitle('I received the following DM:')
                .setThumbnail('https://i.imgur.com/K5BeJK9.png')
                .addFields(
                        { name: `From Anonymous User`, value: `${message.author.content}` }
                        )
            bot.channels.cache.get('850513185081262090').send(messageEmbed)
            bot.channels.cache.get('850513185081262090').send(`=======================`)
            
        }
}
    });
    bot.on('message', message => {
        let userdata = message.content.slice('').trim().split(' ');
        if (message.content.includes('!rc.cmapp')){
                message.channel.send('➡️Redirecting...');
                let channel = bot.channels.cache.get("778663563589713922")
                bot.channels.cache.get("778663116824772679").send(`New application approved by an administrator!`);
                channel.messages.fetch(`${userdata[1]}`).then(message => {
                bot.channels.cache.get("778663116824772679").send(message.embeds)      
                bot.channels.cache.get("778663116824772679").send(`Vote here`);
                bot.channels.cache.get("778663116824772679").send(`=======================================================================================`);
                });   
        }
        if (message.content.includes('!rc.fsmapp')){
                message.channel.send('➡️Redirecting...');
                let channel = bot.channels.cache.get("778663518349295628")
                bot.channels.cache.get("778663050261561366").send(`New application approved by an administrator!`);
                channel.messages.fetch(`${userdata[1]}`).then(message => {
                        bot.channels.cache.get("778663050261561366").send(message.embeds)      
                bot.channels.cache.get("778663050261561366").send(`Vote here`);
                bot.channels.cache.get("778663050261561366").send(`=======================================================================================`);
                });   
        }
        let filter = m => m.author.id === message.author.id
        if (message.content.includes('!app.manual')){
            message.channel.send(`🤖 - Starting operation Manual Forward for ${message.author} bleep blop... `);
            message.channel.send('🤖 - Type one of the current roles: `freestyler,competitive,vfx,gfx,other`');
            message.channel.send('⚠️ - Make sure you typed the command correctly should be command + id');
            message.channel.send('⏰ You have 3 minutes, else type `stop` to terminate the Operation.').then(() => {
                message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 30000,
                    errors: ['time']
                  })
                  .then(message => {
                    message = message.first();
                    if (message.content.toUpperCase().includes('freestyler'.toUpperCase()) || message.content.toUpperCase().includes('fs'.toUpperCase())) {
                      message.channel.send(`➡️Redirecting...`);
                      message.channel.send(`🤖 - Operation send Manual Forward to Freestylers, Completed!`);
                      let channel = bot.channels.cache.get("734378720168509510")
                      bot.channels.cache.get("796003348120600617").send(`New freestyler application approved by an administrator!`);
                      channel.messages.fetch(`${userdata[1]}`).then(message => {
                              bot.channels.cache.get("796003348120600617").send(message.embeds)      
                      bot.channels.cache.get("796003348120600617").send(`Vote here`);
                      bot.channels.cache.get("796003348120600617").send(`=======================================================================================`);
                      });
                    } else if (message.content.toUpperCase().includes('competitive'.toUpperCase()) || message.content.toUpperCase().includes('comp'.toUpperCase())) {
                        message.channel.send(`➡️Redirecting...`);
                        message.channel.send(`🤖 - Operation send Manual Forward to Competitive, Completed!`);
                        let channel = bot.channels.cache.get("734378720168509510")
                        bot.channels.cache.get("443193513568501760").send(`New competitive application approved by an administrator!`);
                        channel.messages.fetch(`${userdata[1]}`).then(message => {
                                bot.channels.cache.get("443193513568501760").send(message.embeds)      
                        bot.channels.cache.get("443193513568501760").send(`Vote here`);
                        bot.channels.cache.get("443193513568501760").send(`=======================================================================================`);
                        });
                    } else if (message.content.toUpperCase().includes('editor'.toUpperCase()) || message.content.toUpperCase().includes('vfx'.toUpperCase())) {
                        message.channel.send(`➡️Redirecting...`);
                        message.channel.send(`🤖 - Operation send Manual Forward to Editor, Completed!`);
                        let channel = bot.channels.cache.get("734378720168509510")
                        bot.channels.cache.get("443188728198987777").send(`New competitive application approved by an administrator!`);
                        channel.messages.fetch(`${userdata[1]}`).then(message => {
                                bot.channels.cache.get("443188728198987777").send(message.embeds)      
                        bot.channels.cache.get("443188728198987777").send(`Vote here`);
                        bot.channels.cache.get("443188728198987777").send(`=======================================================================================`);
                        });
                    } else if (message.content.toUpperCase().includes('designer'.toUpperCase()) || message.content.toUpperCase().includes('gfx'.toUpperCase())) {
                        message.channel.send(`➡️Redirecting...`);
                        message.channel.send(`🤖 - Operation send Manual Forward to Designer, Completed!`);
                        let channel = bot.channels.cache.get("734378720168509510")
                        bot.channels.cache.get("443188711136690186").send(`New competitive application approved by an administrator!`);
                        channel.messages.fetch(`${userdata[1]}`).then(message => {
                                bot.channels.cache.get("443188711136690186").send(message.embeds)      
                        bot.channels.cache.get("443188711136690186").send(`Vote here`);
                        bot.channels.cache.get("443188711136690186").send(`=======================================================================================`);
                        });
                    } else if (message.content.toUpperCase().includes('stop'.toUpperCase()) || message.content.toUpperCase().includes('cancel'.toUpperCase())) {
                        message.channel.send(`❌Cancelling...`);
                        message.channel.send(`🤖 - Operation has been successfully cancelled!`);
                    } else {
                      message.channel.send(`🤖 - Bleep blop there has been an Error you type an incorrect role\n`
                      +"Roles available: `freestylers,competitive,gfx,vfx,other` please try again...")
                    }
                  })
                  .catch(collected => {
                      message.channel.send('🤖 - Time has passed, Operation Cancelled!');
                  });
              });  
    }
        if (message.content.includes('!rc.crmapp')){
                message.channel.send('➡️Redirecting...');
                let channel = bot.channels.cache.get("782224796179365908")
                bot.channels.cache.get("782226882007138325").send(`New application approved by an administrator!`);
                channel.messages.fetch(`${userdata[1]}`).then(message => {
                        bot.channels.cache.get("782226882007138325").send(message.embeds)      
                bot.channels.cache.get("782226882007138325").send(`Vote here`);
                bot.channels.cache.get("782226882007138325").send(`=======================================================================================`);
                });   
        } 

    });
    /*bot.on('message', (message) => { //whenever a message is sent
      if (message.content.includes('gifyourgame.com/'||'https://www.gifyourgame.com/'||'gfycat.com' || 'http://www.gfycat.com/' )) { 
        message.channel.send('Gif Sumbitted successfully!')
          .then(message.channel.send('Vote here'))
      }
    })*/
    /*bot.on('message', (message) => { //whenever a message is sent
        if ((message.content.includes('revol')) || (message.content.includes('Revol'))) { 
          message.reply('hey what do u need my boss for ?')
        }
      })*/
    bot.on('message', message => {
      let command = message.content.split(' ')[0].slice(1);
      // Command handler, seen previously
      switch (command) {
              case 'bot.forwardfreestyler': {
                message.channel.send('Hey Mr. <@&485926538056040483> \n'
                +'💠The BOT will now forward the recruit to applications.\n'
                              + '⚠️Confirm with a thumb up or deny with a thumb down.');
    
                      // Reacts so the user only have to click the emojis
                      message.react('👍').then(r => {
                              message.react('👎');
                      });
    
                      // First argument is a filter function
                      message.awaitReactions((reaction,user) => user.id === "221029766235553792"/*Revol*/|| user.id === "515860889644302386"/*Airush*/|| user.id === "374302404046225419"/*Karre*/|| user.id === "246026614088007680"/*Physix*/|| user.id === "221648595919699968"/*Merch*/ || user.id === "125616507140046848"/*Jeyer*/ || user.id === "183934956475514880"/*ronzi*/ || user.id === "284773096680849410"/*Mills*/ || user.id === "218661925821743104"/*Tornado*/ || user.id === "226604295624196096"/*Lord*/ || user.id === "293818907196784641"/*Toavols*/ || user.id === "261857932277186560" /*Jawlex*/ && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
                              { max: 1 }).then(collected => {
                                      if (collected.first().emoji.name == '👍') {
                                              message.channel.send('➡️Redirecting...');
                                              bot.channels.cache.get("796003348120600617").send(`New Freestyler application approved by an administrator!`);                                         
                                              bot.channels.cache.get("796003348120600617").send(message.embeds);
                                              bot.channels.cache.get("796003348120600617").send(`Vote here`);
                                              bot.channels.cache.get("796003348120600617").send(`<@&443184664014880769> vote for this bitchass loser that wants to join our monkey team`);
                                      } else
                                              message.channel.send('❌Redirection canceled.');
                              }).catch(() => {
                                      message.channel.send('❌There has been an error');
                              });
    
                      break;
              }
              case 'bot.forwardcompetitive': {
                    message.channel.send('Hey Mr. <@&484404972163694608> \n'
                    +'💠The BOT will now forward the recruit to applications.\n'
                                  + '⚠️Confirm with a thumb up or deny with a thumb down.');
        
                          // Reacts so the user only have to click the emojis
                          message.react('👍').then(r => {
                                  message.react('👎');
                          });
                      
                          // First argument is a filter function
                          message.awaitReactions((reaction,user) => user.id === "221029766235553792"/*Revol*/|| user.id === "515860889644302386"/*Airush*/|| user.id === "374302404046225419"/*Karre*/|| user.id === "246026614088007680"/*Physix*/|| user.id === "221648595919699968"/*Merch*/ || user.id === "125616507140046848"/*Jeyer*/ || user.id === "183934956475514880"/*ronzi*/ || user.id === "284773096680849410"/*Mills*/ || user.id === "218661925821743104"/*Tornado*/ || user.id === "226604295624196096"/*Lord*/ || user.id === "293818907196784641"/*Toavols*/ || user.id === "261857932277186560" /*Jawlex*/ && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
                                  { max: 1 }).then(collected => {
                                          if (collected.first().emoji.name == '👍') {
                                                  message.channel.send('➡️Redirecting...');
                                                  bot.channels.cache.get("443193513568501760").send(`New Competitive Player application approved by an administrator!`);                                         
                                                  bot.channels.cache.get("443193513568501760").send(message.embeds);
                                                  bot.channels.cache.get("443193513568501760").send(`Vote here`);
                                                  bot.channels.cache.get("443193513568501760").send(`<@&443184854474031115> vote for this bitchass loser that wants to join our monkey team`);  
                                          } else
                                                  message.channel.send('❌Redirection canceled.');
                                  }).catch(() => {
                                          message.channel.send('❌There has been an error');
                                  });
        
                          break;
                  }   
                  case 'bot.forwardgfx': {
                    message.channel.send('Hey Mr. <@&824708741605752833> \n'
                    +'💠The BOT will now forward the recruit to applications.\n'
                                  + '⚠️Confirm with a thumb up or deny with a thumb down.');
        
                          // Reacts so the user only have to click the emojis
                          message.react('👍').then(r => {
                                  message.react('👎');
                          });
                          // First argument is a filter function
                          message.awaitReactions((reaction,user) => user.id === "221029766235553792"/*Revol*/|| user.id === "515860889644302386"/*Airush*/|| user.id === "374302404046225419"/*Karre*/|| user.id === "246026614088007680"/*Physix*/|| user.id === "221648595919699968"/*Merch*/ || user.id === "125616507140046848"/*Jeyer*/ || user.id === "183934956475514880"/*ronzi*/ || user.id === "284773096680849410"/*Mills*/ || user.id === "218661925821743104"/*Tornado*/ || user.id === "226604295624196096"/*Lord*/ || user.id === "293818907196784641"/*Toavols*/ || user.id === "261857932277186560" /*Jawlex*/ && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
                                  { max: 1 }).then(collected => {
                                          if (collected.first().emoji.name == '👍') {
                                                  message.channel.send('➡️Redirecting...');
                                                  bot.channels.cache.get("443188711136690186").send(`New GFX application approved by an administrator!`);                                         
                                                  bot.channels.cache.get("443188711136690186").send(message.embeds);
                                                  bot.channels.cache.get("443188711136690186").send(`Vote here`);
                                                  bot.channels.cache.get("443188711136690186").send(`<@&443185018756661248> vote for this bitchass loser that wants to join our monkey team`);  
                                          } else
                                                  message.channel.send('❌Redirection canceled.');
                                  }).catch(() => {
                                          message.channel.send('❌There has been an error');
                                  });
        
                          break;
                  }  
                  case 'bot.forwardvfx': {
                    message.channel.send('Hey Mr. <@&454302082833317888> \n'
                    +'💠The BOT will now forward the recruit to applications.\n'
                                  + '⚠️Confirm with a thumb up or deny with a thumb down.');
        
                          // Reacts so the user only have to click the emojis
                          message.react('👍').then(r => {
                                  message.react('👎');
                          });

                          // First argument is a filter function
                          message.awaitReactions((reaction,user) => user.id === "221029766235553792"/*Revol*/|| user.id === "515860889644302386"/*Airush*/|| user.id === "374302404046225419"/*Karre*/|| user.id === "246026614088007680"/*Physix*/|| user.id === "221648595919699968"/*Merch*/ || user.id === "125616507140046848"/*Jeyer*/ || user.id === "183934956475514880"/*ronzi*/ || user.id === "284773096680849410"/*Mills*/ || user.id === "218661925821743104"/*Tornado*/ || user.id === "226604295624196096"/*Lord*/ || user.id === "293818907196784641"/*Toavols*/ || user.id === "261857932277186560" /*Jawlex*/ && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
                                  { max: 1 }).then(collected => {
                                          if (collected.first().emoji.name == '👍') {
                                                  message.channel.send('➡️Redirecting...');
                                                  bot.channels.cache.get("443188728198987777").send(`New VFX application approved by an administrator!`);                                         
                                                  bot.channels.cache.get("443188728198987777").send(message.embeds);
                                                  bot.channels.cache.get("443188728198987777").send(`Vote here`);
                                                  bot.channels.cache.get("443188728198987777").send(`<@&443184989354590208> vote for this bitchass loser that wants to join our monkey team`);  
                                          } else
                                                  message.channel.send('❌Redirection canceled.');
                                  }).catch(() => {
                                          message.channel.send('❌There has been an error');
                                  });
        
                          break;
                  }
                  case 'bot.forwardother': {
                    message.channel.send('Hey <@&399251116451168277> \n'
                    +'💠The BOT will now forward the recruit to applications.\n'
                                  + '⚠️Confirm with a thumb up or deny with a thumb down.');
        
                          // Reacts so the user only have to click the emojis
                          message.react('👍').then(r => {
                                  message.react('👎');
                          });

        
                          // First argument is a filter function
                          message.awaitReactions((reaction,user) => user.id === "221029766235553792"/*Revol*/|| user.id === "515860889644302386"/*Airush*/|| user.id === "374302404046225419"/*Karre*/|| user.id === "246026614088007680"/*Physix*/|| user.id === "221648595919699968"/*Merch*/ || user.id === "125616507140046848"/*Jeyer*/ || user.id === "183934956475514880"/*ronzi*/ || user.id === "284773096680849410"/*Mills*/ || user.id === "218661925821743104"/*Tornado*/ || user.id === "226604295624196096"/*Lord*/ || user.id === "293818907196784641"/*Toavols*/ || user.id === "261857932277186560" /*Jawlex*/ && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
                                  { max: 1 }).then(collected => {
                                          if (collected.first().emoji.name == '👍') {
                                                  message.channel.send('➡️Redirecting...');
                                                  bot.channels.cache.get("443188186236059649").send(`New application approved by an administrator!`);                                         
                                                  bot.channels.cache.get("443188186236059649").send(message.embeds);
                                                  bot.channels.cache.get("443188186236059649").send(`Vote here`);
                                                  bot.channels.cache.get("443188186236059649").send(`@everyone vote for this bitchass loser that wants to join our monkey team`);  
                                          } else
                                                  message.channel.send('❌Redirection canceled.');
                                  }).catch(() => {
                                          message.channel.send('❌There has been an error');
                                  });
        
                          break;
                  }
      }
    });
    bot.on('message', message => {
        let command = message.content.split(' ')[0].slice(1);
        let userdata = message.content.slice('').trim().split(' ');
        
        switch (command) {
                case 'gif.submit': {
                        if(message.content == "!gif.submit") {
                                return message.channel.send("Bro u can't submit no links :/ don't do me like that next time!")
                        
                        } else if ((message.content.includes('gifyourgame.com/')) || (message.content.includes('https://www.gifyourgame.com/')) || (message.content.includes('gfycat.com')) || (message.content.includes('http://www.gfycat.com/'))) {
                  message.channel.send('Hey Gamer\n'
                  +'💠The BOT will now forward your gif to the <#769345328238690344> channel for voting!\n'
                                + '⚠️Confirm with a thumb up or deny with a thumb down.');
      
                        
                        message.react('👍').then(r => {
                                message.react('👎');
                        });
                        if(message.author.id === bot.user.id) return message.channel.send('There has been an error boss : The bot recognizes the message from itself instead from a selected user')
                        
                        message.awaitReactions((reaction,user) => user.id === message.author.id && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
                                { max: 1 }).then(collected => {
                                        if (collected.first().emoji.name == '👍') {
                                                message.channel.send('➡️Redirecting...');
                                                bot.channels.cache.get("769345328238690344").send(`=================================================================================`);                                                
                                                bot.channels.cache.get("769345328238690344").send(`**New gif has been submitted by user ${message.author}**`);                                         
                                                bot.channels.cache.get("769345328238690344").send(`*Link :* ${userdata[1]}`);
                                                bot.channels.cache.get("769345328238690344").send('🤖- Gif Submitted successfully!')
                                                .then(bot.channels.cache.get("769345328238690344").send('Vote here'))


                                        } else
                                                message.channel.send('❌Redirection canceled.');
                                }).catch(() => {
                                        message.channel.send('❌There has been an error');
                                });
      
                        break;
                }
                else {
                        return message.channel.send("Bro u can't submit invalid links\n"
                        +"Links allowed : gifyourgame , gfycat , giphy")
                }
        
}
};   
});
    bot.on('message', message => {
        if (message.content === 'rc.check') message.reply('Bot Working');
        if ((message.content.includes('!rc.problem')) || (message.content.includes('!rc.problem'))) { 
              message.channel.send('There has been a issue <@221029766235553792>')
              }
    });
    
    bot.on('message', message => {
        let command = message.content.split(' ')[0].slice(1);
        // Command handler, seen previously
        switch (command) {
                case 'rc.forwardfreestyler': {
                        message.channel.send('Hey Mr.Lead Freestyler\n'
                        +'💠New **RC** Submission.\n'
                                      + '⚠️Confirm with a thumb up or deny with a thumb down.');
            
                              // Reacts so the user only have to click the emojis
                              message.react('👍').then(r => {
                                      message.react('👎');
                              });
    
            
                              // First argument is a filter function
                              message.awaitReactions((reaction,user) => user.id === "221029766235553792"/*Revol*/|| user.id === "515860889644302386"/*Airush*/|| user.id === "374302404046225419"/*Karre*/|| user.id === "246026614088007680"/*Physix*/|| user.id === "221648595919699968"/*Merch*/ || user.id === "125616507140046848"/*Jeyer*/ || user.id === "183934956475514880"/*ronzi*/ || user.id === "284773096680849410"/*Mills*/ || user.id === "218661925821743104"/*Tornado*/ || user.id === "226604295624196096"/*Lord*/ || user.id === "293818907196784641"/*Toavols*/ && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
                                      { max: 1 }).then(collected => {
                                              if (collected.first().emoji.name == '👍') {
                                                      message.channel.send('➡️Redirecting...');
                                                      bot.channels.cache.get("778663050261561366").send(`New application approved by an administrator!`);                                         
                                                      bot.channels.cache.get("778663050261561366").send(message.embeds);
                                                      bot.channels.cache.get("778663050261561366").send(`Vote here`);
                                                      bot.channels.cache.get("778663050261561366").send(`Tag Freestyler test`);
                                                      bot.channels.cache.get("778663050261561366").send(`=======================================================================================`);  
                                              } else
                                                      message.channel.send('❌Redirection canceled.');
                                      }).catch(() => {
                                              message.channel.send('❌There has been an error');
                                      });
            
                        break;
                      }; 
                case 'rc.creatives': {
                        message.channel.send('Hey Mr.Lead Creatives\n'
                        +'💠New **RC** Submission.\n'
                                      + '⚠️Confirm with a thumb up or deny with a thumb down.');
            
                              // Reacts so the user only have to click the emojis
                              message.react('👍').then(r => {
                                      message.react('👎');
                              });
    
            
                              // First argument is a filter function
                              message.awaitReactions((reaction,user) => user.id === "221029766235553792"/*Revol*/|| user.id === "515860889644302386"/*Airush*/|| user.id === "374302404046225419"/*Karre*/|| user.id === "246026614088007680"/*Physix*/|| user.id === "221648595919699968"/*Merch*/ || user.id === "125616507140046848"/*Jeyer*/ || user.id === "183934956475514880"/*ronzi*/ || user.id === "284773096680849410"/*Mills*/ || user.id === "218661925821743104"/*Tornado*/ || user.id === "226604295624196096"/*Lord*/ || user.id === "293818907196784641"/*Toavols*/ && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
                                      { max: 1 }).then(collected => {
                                              if (collected.first().emoji.name == '👍') {
                                                      message.channel.send('➡️Redirecting...');
                                                      bot.channels.cache.get("782226882007138325").send(`New application approved by an administrator!`);                                         
                                                      bot.channels.cache.get("782226882007138325").send(message.embeds);
                                                      bot.channels.cache.get("782226882007138325").send(`Vote here`);
                                                      bot.channels.cache.get("782226882007138325").send(`=======================================================================================`);  
                                              } else
                                                      message.channel.send('❌Redirection canceled.');
                                      }).catch(() => {
                                              message.channel.send('❌There has been an error');
                                      });
            
                        break;
                      }; 
                case 'rc.forwardcompetitive': {
                        message.channel.send('Hey Mr.Lead Competitive\n'
                        +'💠New **RC** Submission.\n'
                                      + '⚠️Confirm with a thumb up or deny with a thumb down.');
            
                              // Reacts so the user only have to click the emojis
                              message.react('👍').then(r => {
                                      message.react('👎');
                              });
    
            
                              // First argument is a filter function
                              message.awaitReactions((reaction,user) => user.id === "221029766235553792"/*Revol*/|| user.id === "515860889644302386"/*Airush*/|| user.id === "374302404046225419"/*Karre*/|| user.id === "246026614088007680"/*Physix*/|| user.id === "221648595919699968"/*Merch*/ || user.id === "125616507140046848"/*Jeyer*/ || user.id === "183934956475514880"/*ronzi*/ || user.id === "284773096680849410"/*Mills*/ || user.id === "218661925821743104"/*Tornado*/ || user.id === "226604295624196096"/*Lord*/ || user.id === "293818907196784641"/*Toavols*/ && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
                                      { max: 1 }).then(collected => {
                                              if (collected.first().emoji.name == '👍') {
                                                      message.channel.send('➡️Redirecting...');
                                                      bot.channels.cache.get("778663116824772679").send(`New application approved by an administrator!`);                                         
                                                      bot.channels.cache.get("778663116824772679").send(message.embeds);
                                                      bot.channels.cache.get("778663116824772679").send(`Vote here`);
                                                      bot.channels.cache.get("778663116824772679").send(`Tag Competitive test`);
                                                      bot.channels.cache.get("778663116824772679").send(`=======================================================================================`);  
                                              } else
                                                      message.channel.send('❌Redirection canceled.');
                                      }).catch(() => {
                                              message.channel.send('❌There has been an error');
                                      });
            
                        break;
                      }
                    
          }
        });
        bot.on('message', message =>{
                let command = message.content.split(' ')[0].slice(1);
                let args = message.content.slice('').trim().split(' ');
                switch(command) {
                case "meme":
                    if (!args[1]) return message.channel.send("You need to give the text you want to apply to the image!");
                    if (!message.attachments.first()) return message.channel.send("You need to provide an image!");
                    try {
                        const [topText, bottomText] = args.slice(1).join(" ").split(",");
                        message.channel.startTyping();
                        Jimp.read(message.attachments.first(), (err, lenna) => {
                            Jimp.loadFont('/app/overlaybot/Impact.fnt').then(font => {
                                if (err) console.log(err);
                                var yAxisMove = 900
                                if (20 > bottomText.length > 10) {
                                    var yAxisMove = 720;
                                } else if (bottomText.length > 20) {
                                    var yAxisMove = 580;
                                }
                                lenna
                                .resize(800,800)
                                .quality(100) // set quality
                                .print(font, -100, -20, {
                                    text: topText,
                                    alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
                                    alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
                                }, 1000)
                                .print(font, -100, 650, {
                                    text: bottomText,
                                    alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
                                    alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
                                }, 1000)
                                .write("./tmp/" + message.author.id +".png"); // save
                            });
                        });
                        if (!bottomText) {
                            let noBottomText = message.channel.send("You need to add a bottom text! If you dont want a bottom text, just add a  period.");
                            let stoptyping = message.channel.stopTyping();
                            return [noBottomText, stoptyping];
                        }
                        for (i = 0; i < (1); i++) {
                            setTimeout(function() {
                                message.channel.send({
                                    files: ["./tmp/" + message.author.id + ".png"]
                                })
                                message.channel.stopTyping();
                                for (i = 0; i < (1); i++) {
                                    setTimeout(function() {
                                        fs.unlinkSync("./tmp/" + message.author.id + ".png")
                                    }, 3 * 1000)
                                }
                            }, 3 * 1000)
                        }
                    } catch(e) {
                        console.warn("There was a problem with the meme command.")
                    }
                   
                break;
                };
            });

    bot.on('message', message => {
            if(message.content === `Vote here`) {
                    message.react('513401447002537992').then(r => {
                            message.react('477275360329990164');
                    });
            }
    });

    
    bot.login(token).catch(err => console.log(err))

