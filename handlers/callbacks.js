const { list , lanjut } = require("../button/buttons")
const { startMenu } = require("../handlers/start")
const { products }  = require("../produk/product")
const axios = require("axios")
const cheerio = require("cheerio")

async function getQR(price) {

 const url = `https://saweria.co/shifaniputri?amount=${price}`

 const { data } = await axios.get(url)

 const $ = cheerio.load(data)

 const qr = $("img").first().attr("src")

 return qr
}

module.exports = async (bot, query, getQR) => {

    const chatId = query.message.chat.id
    const messageId = query.message.message_id
    const data = query.data

    console.log(data)

    if (data === "daftar") {

        await bot.deleteMessage(chatId, messageId)

        bot.sendPhoto(chatId, './images.jpg', {
            caption: `<b>📦 Berikut daftar Paket VIP yang tersedia:</b>`,
            parse_mode: "HTML", ...list()
        })
    }

    if (data === "kembali") {

        await bot.deleteMessage(chatId, messageId)

        startMenu(bot, chatId)

    }

    if (data === "tutup") {
        await bot.deleteMessage(chatId, messageId)
    }

    if (data.startsWith("produk_")) {

        const id = data.split("_")[1]
        const produk = products[id]

        if (!produk) return

        await bot.deleteMessage(chatId, messageId)

        bot.sendPhoto(chatId, "./images.jpg", {
            caption : `<blockquote>Nama : ${produk.nama}\nHarga : Rp ${produk.price.toLocaleString()}</blockquote>`,
            parse_mode : "HTML", ...lanjut(id)
        })
    }

    if (data.startsWith("bayar_")) {

        const id = data.split("_")[1]
        const produk = products[id]
        const qr = $("img").first().attr("src")

        const amount = produk.price.replace(".", "")
        await bot.deleteMessage(chatId, messageId)

        bot.sendPhoto(chatId, qr, {
            caption : `💰 Pembayaran ${produk.nama}\nHarga : Rp ${produk.price}\nSilahkan SCAN Qris Tersebut`
        })

    }

    bot.answerCallbackQuery(query.id)
}