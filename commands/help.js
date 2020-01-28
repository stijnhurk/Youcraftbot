const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    console.log("TEST");

    try{

        var text = "**YouCraftNetwork-Bot** \n\n **__Commands__** \n SOON";

        message.author.send(text);








    }catch(erro){

        message.channel.send("er is iets fout gegaan");

    }






}

module.exports.help = {
    name: "help"
}

