const { addbbs } = require("./create")
const {updateId} = require("./update")
const {deleteById} = require("./delete")
const { getTodos } = require("./find")
const { getId } = require("./getId")
const {bbQuestion, rl} = require('./system')

const index = async () => {

    const menu = ["1.--Create", "2.--Update", "3.--Delete", "4.--Find Data", "5.--Get Data By Id", "6.--Exit"]

    
        for (const choose of menu) {
            console.log(choose)
        }
    const input = await bbQuestion('Select number: ')
    
switch (Number(input)) {
    case 1:
        addbbs()
        break;
    case 2:
        updateId()
        break;
    case 3:
        deleteById();
        break;
    case 4:
        getTodos();
        break;
    case 5:
        getId();
        break;
    case 6:
        rl.close()
        break;
        default:
        console.log("sorry no is not available please select again no 1- 6");
        rl.close()
        break;
    }
}
index()
