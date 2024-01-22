const {randomId} = require("./randomId");
const fs = require('fs');
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const directary = './database';
if (!fs.existsSync(directary)) {
    fs.mkdirSync(directary);
}

const checkFile = './database/data.json';
if (!fs.existsSync (checkFile)) {
    fs.writeFileSync(checkFile, '[]', 'utf-8')
}

const bbQuestion = (question) => {
    return new Promise((resolve, rejects) => {
        rl.question(question, (answer) => {
            resolve(answer);
        })
    })
}

const bbShop = () => {
    const filebbShop = fs.readFileSync(checkFile)
    const data = JSON.parse(filebbShop);
    console.log(data);
    rl.close()
}

const create = ( name, paket, time, model, price, colorHair, ) => {
    const id = randomId(10);
    const databbs = {id, name, paket, time, model, price, colorHair,}
    const file = fs.readFileSync(checkFile, 'utf-8');

    const databb = JSON.parse(file);
    databb.push(databbs);
    fs.writeFileSync(checkFile, JSON.stringify(databb))
    console.log('Thanks you submit')
    rl.close();
}

const getById = (id) => {
    const file = fs.readFileSync(checkFile, 'utf-8');
    const data = JSON.parse(file);
    const menemukanId = data.find(get => get.id === id)

    if (menemukanId) {
        console.log(menemukanId)
        return menemukanId
    } else {
        console.log(`Data dengan id ini ${id} tidak ditemukan`)
        return false
    }
    
    rl.close()
}

const update = (id, update) => {
    const file = fs.readFileSync(checkFile, 'utf-8');
    const data = JSON.parse(file);
    const index = data.findIndex(updateId => updateId.id === id)

    if (index !== -1) {
        const existingData = data[index];
        data[index] = { ...existingData, ...update };
        fs.writeFileSync(checkFile, JSON.stringify(data));
        console.log(`Data berhasil ditemukan: ${id} `);
        return existingData; 
    } else {
        console.log(`Data dengan ID ini ${id} tidak ditemukan`)
    }
    rl.close()
}

const deleteId = (id) => {
    const file = fs.readFileSync(checkFile, 'utf-8');
    const data = JSON.parse(file);
    const filterId = data.filter(filter => filter.id !== id);

    if (filterId.length < data.length) {
        fs.writeFileSync(checkFile, JSON.stringify(filterId));
        console.log(`Successfully dalete Data : ${id}`)
    } else {
        console.log(`Data dengan id ini ${id} tidak ditemukan`)
    }
    rl.close()
}

module.exports = {
    bbQuestion,
    bbShop,
    create,
    getById, 
    deleteId,
    update,
    rl
}