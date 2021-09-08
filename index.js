const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = 'bot.';
const token = process.env.TOKEN;
const Jimp = require('jimp');
const fs = require('fs');


bot.on('ready', () => {
        console.log('This bot is online!');
        bot.user.setActivity('🩸BLOODS ON TOP!');
    });
    bot.on('message', message => {
        if (message.content === 'bot.check') message.reply('Bot Working');   
        if (message.content === 'bot.avatar') {
          message.channel.send(`**This is your avi:**`)
          let targetMember;
          targetMember = message.author;
    
          let avatarEmbed = new Discord.MessageEmbed()
              .setImage(targetMember.displayAvatarURL())
              .setColor(targetMember.displayHexColor)
              message.channel.send(avatarEmbed)
        };
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
            bot.channels.cache.get('885310014741426246').send(messageEmbed)
            bot.channels.cache.get('885310014741426246').send(`=======================`)
            
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

