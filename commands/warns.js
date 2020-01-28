const discord = require("discord.js");
const fs = require("fs");

const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

    // !warn gebruiker tekst!

    if (!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send("Sorry dit kan jij niet doen");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!user) return message.channel.send("Geef een gebruiker op, Gebruiker is niet op server!");

    if (user.hasPermission("ADMINISTRATOR")) return message.channel.send("Sorry deze persoon kan je niet waarschuwen!");

    var reason = args.join(" ").slice(22);

    if (!reason) return message.channel.send("Je moet een reden toevoegen!");

    if (!warns[user.id]) warns[user.id] = {
       warns: 0


    };

    warns[user.id].warns++;

    fs.writeFile("./warnigs.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err)



    });

    var warnEmbed = new discord.RichEmbed()
    .setDescription("warn")
    .setColor("#ff5100")
    .addField("warned gebruiker", user)
    .addField("Gewarned Door", message.author)
    .addField("Aantal warns", warns[user.id].warns)
    .addField("Reden", reason);

    var straffen = message.guild.channels.find(`name`, "straffen");
    if (!straffen) return message.guild.send("Kan het kanaal niet vinden");

    straffen.send(warnEmbed);




    



}


module.exports.help = {
    name: "warn"
}

