var routes = require('./routes'),
    config = require('./config'),
    fs = require('fs'),
    TelegramBot = require('node-telegram-bot-api');

if (!fs.existsSync(config.storage)) {
    fs.mkdirSync(config.storage);
}

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(config.token, {polling: true});

// Create bot routes
routes.create(bot);

bot.sendMessage(config.adminChatId, `Bot started.`);