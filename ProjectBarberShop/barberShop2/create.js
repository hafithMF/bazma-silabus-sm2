const { create, bbQuestion } = require('./system')

const addbbs = async () => {
    const name = await validation("Masukan name anda :")
    const paket = await validation("Pilih jenis paket anda :")
    const time = await validation("Masukan waktu anda :")
    const model = await validation("Masukan jenis model cukuran anda :")
    const price = await validation("Masukan harga :")
    const colorHair = await validation("Pilih jenis warna rambut anda :")

    create(name, paket, time, model, price, colorHair,)
}
const validation = async (i) => {
    let input;
    do {
        input = await bbQuestion(i);
        if (!input) {
            console.log('Data tidak boleh kosong!!')
        }
    } while (!input)

    return input
}

module.exports = { addbbs }