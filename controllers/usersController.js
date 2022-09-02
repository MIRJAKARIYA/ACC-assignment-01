
//controller to get all userr



module.exports.getAllUsers = (req, res, next)=>{
    res.json(req.body.myData) 
}

//controller to get a random user
module.exports.getRandomUser = (req, res, next)=>{
    const data = req.body.myData
    const randomData = data[Math.floor(Math.random()*data.length)]
    res.json(randomData)
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