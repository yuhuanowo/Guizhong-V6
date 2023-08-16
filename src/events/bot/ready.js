const logger = require("../../utils/logger");
const config = require("../../config");
const { Activity, ActivityType } = require("discord.js");

module.exports = {
    name: "ready",
    once: true,
    async execute(client) {

        logger.success("Guizhong is now ready.");

        //檢查機器人是否在任何伺服器
        //如果沒有，則顯示邀請連結  如果有，則顯示機器人在多少伺服器
        if (client.guilds.cache.size === 0) {
            logger.warn(`Guizhong is not in any servers. Invite Guizhong to your server using the following link: https://discord.com/api/oauth2/authorize?client_id=${config.clientId}&permissions=274914887744&scope=bot%20applications.commands`);
        } else {
            logger.info(`Guizhong is in ${client.guilds.cache.size} ${client.guilds.cache.size === 1 ? "server" : "servers"}.`);
        }
        //設定機器人狀態
        client.user.setActivity(`/help | ${client.guilds.cache.size} servers`, { type: ActivityType.Listening });
    },
};
