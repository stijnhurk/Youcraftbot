const discord = require("discord.js");
const ms = require("ms");

module.exports.run = async(bot, message, args) => {

    //!tempmute gebruiker tijd

    if (!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send("Sorry dit kan jij niet doen");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!user) return message.channel.send("Geef een gebruiker op, Gebruiker is niet op server!");

    if (user.hasPermission("ADMINISTRATOR")) return message.channel.send("Sorry deze persoon kan je niet muten!");

    var muteRole = message.guild.roles.find("name", "muted");

    if(!muteRole) return message.channel.send("De rol bestaat niet!");

    var mutetime = args[1];

    if(!mutetime) message.channel.send("geef een tijd op!");

    await (user.addRole(muteRole.id));

    message.channel.send(`${user} is gemtude voor ${mutetime}`);

    setTimeout(function() {

        user.removeRole(muteRole.id);

        message.channel.send(`${user} is geumute`);


        
    }); ms(mutetime);





    



}


module.exports.help = {
    name: "tempmute"
}

