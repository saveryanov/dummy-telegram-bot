# Dummy Telegram Bot

Node.js blank telegram bot for further development.

## How to use

This application is designed as a workpiece for the development of a bot for telegram. It has following structure:

* **app.js** - app entry point
* **config.js** - app config file
    * token - place here your telegram bot token
    * storage - directory for file storage (it will created automatically)
* **controllers** directory
    * **help.js** - controller used for creating help output for user (see /routes/examples.js for usage examples)
    * **index.js** - used for registering controllers
* **routes** directory used for registering telegram bot commands
    * **main.js** - main bot commands like */help* or */ping*
    * **examples.js** - some examples for creating bot commands
    * **index.js** - used for registering route files
* **test** directory for your tests

You can create bot by contacting @BotFather.

## Install

```npm install```

## Run

```node app```

or

```npm start```

## Test

```npm test```
