const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "invite",
    description: "Invite the Shot on Iphone Memes Bot",

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        interaction.followUp({ content: `[Invite me to your server by clicking here](https://discord.com/oauth2/authorize?client_id=883716163790577735&permissions=117760&scope=bot%20applications.commands)` });
    },
};
