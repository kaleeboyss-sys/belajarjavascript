const { buttons } = require("./button")

function startMenu(bot, chatId) {

    bot.sendPhoto(chatId, './images.jpg', {
        caption: `<blockquote><b>🔥MEDIA VVIP ROOM PREMIUM🔥</b></blockquote>\n\n<blockquote><b>📌PERMANENT SEKALI BAYAR\n📌KUALITAS HD\n📌DURASI PANJANG\n📌TANPA BIAYA TAMBAHAN\n📌TANPA LINK && IKLAN\n📌UPDATE TERUS</b></blockquote>\n\n<b>Silakan pilih tombol di bawah yang ingin anda order

💥TESTI PEMBAYARAN💥
https://t.me/TestiMediaVVIP3</b>`,
        parse_mode: "HTML",
        ...buttons()
    })
}
module.exports = { startMenu }