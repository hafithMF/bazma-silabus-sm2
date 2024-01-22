const { addbbs } = require('./create')
const { deleteById } = require('./delete')
const { getData} = require('./find')
const { getId } = require('./getId')
const { updateId } = require('./update')
const { bbQuestion, rl } = require('./system')

const index = async () => {
    const menu = ["1.--Membuat Data", "2.--Menghapus Data", "3.--Melihat Seluruh Data",
        "4.--Mendapatakan Data Dengan Idnya", "5.--Mengupdate Data", "6.--Exit"]
    
    for (const choose of menu) {
        console.log(choose)
    }
    const input = await bbQuestion('Select Number :')

    switch (Number(input)) {
        case 1:
            addbbs()
            break;
        case 2:
            deleteById()
            break;
        case 3:
            getData()
            break;
        case 4:
            getId()
            break;
        case 5:
            updateId()
            break;
        case 6:
            rl.close()
            break;
        default:
            console.log("Sorry no is not available please select again no 1-6")
            rl.close()
            break;
    }
}
index()

