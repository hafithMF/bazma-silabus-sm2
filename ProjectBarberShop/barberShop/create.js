const { create, bbQuestion  } = require('./system')

const addbbs = async () => {
    const name = await validation("Masukan name anda :")
    const paket = await validation("Masukan jenis paket anda :")
    const time = await validation("masukan waktu anda :")
    const model = await validation("masukan jenis model cukuran anda :")
    const price = await validation("masukan harga :")
    const colorHair = await validation("Jenis warna rambut :")

    create(name, paket, time, model, price, colorHair, )
}  
const validation = async (i) => {
    let input;
    do {
        input = await bbQuestion(i);
        if (!input) {
            console.log('Data wajib di isi')
        }
    } while (!input);
    
        return input
    }
    

module.exports = { addbbs }