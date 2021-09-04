const { Message, Client } = require("discord.js");

module.exports = {
    name: "shotoniphone",
    aliases: ["soi"],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const axios = require('axios');

        const url = 'https://shot-on-iphone.studio/api/video';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured!`)
        }


        await message.channel.send({content : data.url })

    },
};
