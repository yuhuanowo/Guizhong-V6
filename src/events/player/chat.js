//是一個事件 關於當有用戶打出某些字時會觸發
// 這裡是當有人打出「嗨」時會觸發

const logger = require("../../utils/logger");
const config = require("../../config");
const { Activity, ActivityType } = require("discord.js");
const axios = require('axios');
const fs = require('fs');

module.exports = {
    name: "messageCreate",
    async execute(message, client) {

        logger.info(`${message.author.tag} said: ${message.content}`);

        if (message.content.toLowerCase() === "嗨") {
            const embed = new MessageEmbed()
                .setTitle("嗨")
                .setDescription("嗨嗨嗨")
                .setColor("RANDOM")
                .setTimestamp()

            message.channel.send({ embeds: [embed]
    }
    );
        }
    }
};
