
//controller to get all userr



module.exports.getAllUsers = (req, res, next)=>{
    const {s} = req.query
    res.json(req.parsed.myData.slice(0,s)) 
}

//controller to get a random user
module.exports.getRandomUser = (req, res, next)=>{
    const data = req.parsed.myData
    console.log(data)
    const randomData = data[Math.floor(Math.random()*data.length)]
    res.json(randomData)
}

//controller to post a user

module.exports.saveUser = (req, res, next) =>{
 
    const oldData =req.parsed.myData
       console.log(oldData)
    oldData.push(req.body)
    req.stringified ={oldData:oldData}
    next()
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