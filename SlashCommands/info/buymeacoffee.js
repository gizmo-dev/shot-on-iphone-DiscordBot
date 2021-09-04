const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "bmc",
    description: "Buy Me a Coffee",

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        interaction.followUp({ content: `If you liked the bot or the website, you can support me by [<:bmc:869468996733370408> Buying Me a Coffee!](https://www.buymeacoffee.com/gizmoxgg)` });
    },
};
