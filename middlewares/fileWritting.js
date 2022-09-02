const fs = require('fs');
const FILE_PATH = 'data/users.json'

const fileWritting = (req, res, next) =>{
    const stringifiedData = JSON.stringify(req.stringified.oldData)
    console.log(stringifiedData)
    fs.writeFile(FILE_PATH,stringifiedData,(err)=>{
        if(err){
            res.write('Data failed to writee')
            res.end()
        }
        else{
            res.json({UserAdded: true, users: stringifiedData})
        }
    })
}


module.exports = fileWritting;