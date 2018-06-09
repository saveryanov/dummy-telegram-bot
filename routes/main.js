var controllers = require('../controllers');

module.exports.create = function (bot) {
    controllers.help.addCommand({
        path: '/help',
        description: 'help text' 
    });
    bot.onText(/^\/help/i, (msg) => {
        const chatId = msg.chat.id;
        bot.sendMessage(chatId, controllers.help.getText());
    });

    controllers.help.addCommand({
        path: '/ping',
        description: 'returns pong' 
    });
    bot.onText(/^\/ping/i, (msg) => {
        const chatId = msg.chat.id;
        bot.sendMessage(chatId, 'pong');
    });
}