const { list } = require("../button")
const { startMenu } = require("../start")

module.exports = async (bot, query) => {

    const chatId = query.message.chat.id
    const messageId = query.message.message_id
    const data = query.data

    if (data === "daftar") {

        await bot.deleteMessage(chatId, messageId)

        bot.sendPhoto(chatId, './images.jpg', {
            caption: `<b>📦 Berikut daftar Paket VIP yang tersedia:</b>`,
            parse_mode: "HTML",
            ...list()
        })
    }

    if (data === "kembali") {

        await bot.deleteMessage(chatId, messageId)

        startMenu(bot, chatId)

    }

    if (data === "tutup") {
        await bot.deleteMessage(chatId, messageId)
    }

    bot.answerCallbackQuery(query.id)
}