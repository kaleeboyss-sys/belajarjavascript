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
                    { text: "💬Hubungi Admin", callback_data: "admin" }
                ]
            ]
        }
    }
}

function list() {
    return {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "💎 PROMO VIP", callback_data: "promo" }
                ],
                [
                    { text: "Lanjut Bayar", callback_data: "bayar" }, { text: "Lanjut Bayar", callback_data: "bayar" }
                ],
                [
                    { text: "Lanjut Bayar", callback_data: "bayar" }, { text: "Lanjut Bayar", callback_data: "bayar" }
                ],
                [
                    { text: "Lanjut Bayar", callback_data: "bayar" }, { text: "Lanjut Bayar", callback_data: "bayar" }
                ],
                [
                    { text: "Lanjut Bayar", callback_data: "bayar" }, { text: "Lanjut Bayar", callback_data: "bayar" }
                ],
                [
                    { text: "Lanjut Bayar", callback_data: "bayar" }, { text: "Lanjut Bayar", callback_data: "bayar" }
                ],
                [
                    { text: "🏷 JOIN SEMUA", callback_data: "bayar" }
                ],
                [
                    { text: "🔙 KEMBALI", callback_data: "kembali" }, { text: "❌ TUTUP", callback_data: "tutup" }
                ]
            ]
        }
    }
}

function promo() {
    return {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "📂 PROMO 1", callback_data: "daftar" }
                ],
                [
                    { text: "📂 PROMO 2", callback_data: "tutor" }
                ],
                [
                    { text: "📂 PROMO 3", callback_data: "admin" }
                ]
            ]
        }
    }
}
module.exports = { buttons , list,  promo }