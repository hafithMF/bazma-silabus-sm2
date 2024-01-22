const { deleteId, bbQuestion } = require('./system')

const deleteById = async () => {
    const id = await bbQuestion("Masukan id data:")
    deleteId(id)
}
module.exports = { deleteById }