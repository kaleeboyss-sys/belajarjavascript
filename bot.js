const TelegramBot = require("node-telegram-bot-api")
require("dotenv").config()

const token = process.env.TOKEN_BOT
const { startMenu } = require("./start")
const callbackHandler = require("./handlers/callbacks")

const bot = new TelegramBot(token, { polling: true })

bot.onText(/\/start/, (msg) => {
    startMenu(bot, msg.chat.id);
});

bot.on("callback_query", (query) => callbackHandler(bot, query))
