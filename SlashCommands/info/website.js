const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "website",
    description: "Shot on iphone studio website",

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        interaction.followUp({ content: `[shot-on-iphone.studio](https://shot-on-iphone.studio)` });
    },
};
