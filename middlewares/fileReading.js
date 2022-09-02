const fs = require('fs');
const parseJson = require('../utils/parseJson');
const FILE_PATH = 'data/users.json'
const fileReading = (req, res, next) =>{
    fs.readFile(FILE_PATH,(err, data)=>{
        if(err){
            console.log(err)
            res.status(500).send({error: 'internal server error'})
        }
        else{
            const myData = parseJson(data)
            req.body = {
                 myData
            }

            next()
        }
        
    })
    
}

module.exports = fileReading