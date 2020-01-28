const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // !clear 21

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Je hebt geen toestemming voor dit commando");

    if (!args[0]) return message.channel.send("Geef een aantal op!");

    if (Number.isInteger(parseInt(args[0]))) {

        var amount = (args[0]) = 1;

        message.channel.bulkDelete(amount).then(() => { 



            if (args[0] == 0) {

                message.channel.send(`Ik kan niet 0 berichten verwijderen!`);

            } else if (args[0] == 1){ 

                message.channel.send(`Ik heb 1 bericht verwijderd.`).then(message => message.delete(3000));






            }

            message.channel.send(`Ik heb ${args[0]} berichten verwijderd`).then(message => message.delete(3000));





        });





    } else {
        return message.channel.send("Geef een getal op.");






    }

    

    


}


module.exports.help = {
    name: "clear"
}

