var controllers = require('../controllers');

const commandsGroup = 'Для примера';

module.exports.create = function (bot) {

    controllers.help.addCommand({
        path: '/echo arguments',
        description: 'outputs JSON of message and arguments',
        group: commandsGroup
    });
    bot.onText(/^\/echo (.+)/i, (msg, match) => {
        bot.sendMessage(msg.chat.id, "match: \n\n" + JSON.stringify(match));
        bot.sendMessage(msg.chat.id, "msg: \n\n" + JSON.stringify(msg));
    });

    controllers.help.addCommand({
        path: 'number + number',
        description: 'return sum',
        group: commandsGroup
    });
    bot.onText(/^([\d,.\s]+)\+([\d,.\s]+)/i, (msg, match) => {
        function getFloat(v) {
            return parseFloat(v.toString().replace(',', '.').replace(/\s/ig, ''));
        }

        var variable1 = getFloat(match[1]);
        var variable2 = getFloat(match[2]);
        var sum = variable1 + variable2;

        bot.sendMessage(msg.chat.id, `${variable1} + ${variable2} = ${sum}`);
    });

    controllers.help.addCommand({
        path: '/hi',
        description: 'outputs hello %username%',
        group: commandsGroup
    });
    bot.onText(/^\/hi/i, (msg) => {
        bot.sendMessage(msg.chat.id, "Hello, " + msg.from.first_name);
    });

    controllers.help.addCommand({
        path: '/location',
        description: 'outputs map with point',
        group: commandsGroup
    });
    bot.onText(/^\/location/i, (msg) => {
        bot.sendLocation(msg.chat.id, 44.97108, -104.27719);
    });

    controllers.help.addCommand({
        path: '/menu',
        description: 'outputs menu keyboard',
        group: commandsGroup
    });
    bot.onText(/^\/menu/i, (msg) => {
        bot.sendMessage(msg.chat.id, "Menu printed", {
            "reply_markup": {
                "keyboard": [
                    ["/help", "/ping"],
                    ["1,2 + 3.4", "/echo 123", "/controls"],
                    ["/menu", "/location"]
                ]
            }
        });
    });

    controllers.help.addCommand({
        path: '/controls',
        description: 'outputs another menu keyboard',
        group: commandsGroup
    });
    bot.onText(/^\/controls/i, (msg) => {
        bot.sendMessage(msg.chat.id, "Where?", {
            "reply_markup": {
                "keyboard": [
                    ["/menu", "north", "/help"],
                    ["west", "east"],
                    ["south"]
                ]
            }
        });
    });

}