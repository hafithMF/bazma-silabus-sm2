const { getById, bbQuestion } = require('./system')

const getId = async () => {
    const id = await bbQuestion("Masukan Id yang ingin di cari :")

    getById(id);
}

module.exports = { getId }