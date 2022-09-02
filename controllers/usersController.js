const fs = require('fs');
//controller to get all userr
const FILE_PATH = 'data/users.json'
const parseJson = require('../utils/parseJson');

module.exports.getAllUsers = (req, res, next)=>{
    
    fs.readFile(FILE_PATH,(err, data)=>{
        if(err){
            console.log(err)
            res.end()
        }
        else{
            const parsedData = parseJson(data)
            
            res.send(parsedData)
        }
    })
}

//controller to get a random user
module.exports.getRandomUser = (req, res, next)=>{
    res.json({random: "jack"})
}

//controller to post a user

module.exports.saveUser = (req, res, next) =>{
    res.json({saved: true})
}

//controller to update a random user
module.exports.updateSingleUser = (req, res, next) =>{
    console.log(req.params.id)
    res.json({updatedSingle: true})
}

//controller to bulk update multiple users
module.exports.updateMultipleUser = (req, res, next) =>{
    console.log(req.params.id)
    res.json({updatedMultiple: true})
}

//controller to delete a user
module.exports.deleteUser = (req, res, next)=>{
    res.json({deleted: true})
}