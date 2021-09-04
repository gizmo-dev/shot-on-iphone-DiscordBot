const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "shot-on-iphone",
    description: "Get a shot on iphone meme",

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const axios = require('axios');

        const url = 'https://shot-on-iphone.studio/api/video';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return interaction.followUp(`An error occured!`)
        }


        await interaction.followUp({content : `[Shot on iphone meme](${data.url})`})
       
    },
};
