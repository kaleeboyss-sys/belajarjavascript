const { products } = require("../produk/product")

function buttons() {
    return {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Daftar List VIP", callback_data: "daftar" }
                ],
                [
                    { text: "📚Tutorial Order VIP", callback_data: "tutor" }
                ],
                [
                    { text: "💬Hubungi Admin", url: "https://t.me/Shifaniputri24" }
                ]
            ]
        }
    }
}

function list() {
  const keyboard = []

  for (let i = 0; i < products.length; i += 2) {
    let row = []

    row.push({
      text: products[i].nama,
      callback_data: `produk_${i}`
    })

    if (products[i + 1]) {
      row.push({
        text: products[i + 1].nama,
        callback_data: `produk_${i + 1}`
      })
    }

    keyboard.push(row)
  }

  // button tetap
  keyboard.push([
    { text: "⬅️ Kembali", callback_data: "kembali" },
    { text: "❌ Tutup", callback_data: "tutup" }
  ])

  return {
    reply_markup: {
      inline_keyboard: keyboard
    }
  }
}

function lanjut(id) {
    return {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "LANJUTKAN PEMBAYARAN", callback_data: `bayar_${id}` }
                ],
                [
                    { text: "🔙 KEMBALI", callback_data: "kembali" }, { text: "❌ TUTUP", callback_data: "tutup" }
                ],
            ]
        }
    }
}
module.exports = { buttons , list, lanjut }