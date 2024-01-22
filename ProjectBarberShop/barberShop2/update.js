const { update, bbQuestion, rl } = require('./system');



const updateId = async () => {
    const id = await bbQuestion("Masukkan ID :")
    const existingData = await update(id);
    
    if (existingData) {
        const name = await bbQuestion(`Masukkan nama Anda :`)
        const paket = await bbQuestion(`Masukkan jenis paket Anda :`)
        const time = await bbQuestion(`Masukkan waktu Anda :`)
        const model = await bbQuestion(`Masukkan jenis model cukuran Anda :`)
        const price = await bbQuestion(`Masukkan harga :`)
        const colorHair = await bbQuestion(`Jenis warna rambut :`)
        
        const updateData = {
            name: name || existingData.name,
            paket: paket || existingData.paket,
            time: time || existingData.time,
            model: model || existingData.model,
            price: price || existingData.price,
            colorHair: colorHair || existingData.colorHair,
        };
    
        const dataChange = Object.keys(updateData).some(
            value => String(updateData[value]) !== String(existingData[value])
        );
    
        if (dataChange) {
            update(id, updateData)
            console.log("data berhasil di perbarui")
        } else {
            console.log("tidak ada perubahan")
        } 
    
        rl.close();
    }


}
module.exports = { updateId }