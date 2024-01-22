const { getById, bbQuestion } = require('./system')

const getId = async () => {
    const id = await bbQuestion("Masukan id yang ingin anda cari :")
    
    getById(id);
}
module.exports = { getId }