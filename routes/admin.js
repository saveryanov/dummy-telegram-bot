var config = require('../config'),
    controllers = require('../controllers');

module.exports.create = function (bot) {

    // Логирование сообщений в чат админка
    bot.on('message', msg => {
        let output = `INFO: ${msg.from.first_name} ${msg.from.last_name} (${msg.chat.id}): ${msg.text}`;
        console.log(output);

        if (config.adminChatId != msg.chat.id) {
            bot.sendMessage(config.adminChatId, output);
        }
    });

    // send
    bot.onText(/^\/send (\d+) (.+)/i, (msg, match) => {
        if (config.adminChatId == msg.chat.id) {
            bot.sendMessage(match[1],  match[2]);
        }
    });
}