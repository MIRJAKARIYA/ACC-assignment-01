
//controller to get all users

module.exports.getAllUsers = (req, res, next)=>{
    const {s} = req.query
    res.json(req.parsed.myData.slice(0,s)) 
}

//controller to get a random user
module.exports.getRandomUser = (req, res, next)=>{
    const data = req.parsed.myData
    const randomData = data[Math.floor(Math.random()*data.length)]
    res.json(randomData)
}

//controller to post a user
module.exports.saveUser = (req, res, next) =>{
    const oldData =req.parsed.myData
    oldData.push(req.body)
    req.stringified ={oldData:oldData}
    next()
}

//controller to update a random user
module.exports.updateSingleUser = (req, res, next) =>{
    const {id} = req.params;
    const oldData =req.parsed.myData;
    const updateData = req.body;
    const targetUpdate = oldData.find(data => data.id === Number(id));
    const incomingUpdateKeys = Object.keys(updateData);
    for(const key of incomingUpdateKeys){
        targetUpdate[key] = updateData[key]
    }
    req.stringified = {oldData: oldData}
    next()

}

//controller to bulk update multiple users
module.exports.updateMultipleUser = (req, res, next) =>{

    const idArray = req.body;
    const oldData =req.parsed.myData;
    console.log(oldData)
    console.log(idArray)
    for(const a of idArray){
        const data = oldData.find(d => d.id === a)
        console.log(data)
        if(data !== undefined){
            data.name = "JHANKAR MAHBUB (changed by bulk update)"
        }
        
    }
    req.stringified = {oldData: oldData}
    next()
}

//controller to delete a user
module.exports.deleteUser = (req, res, next)=>{
    const {id} = req.params
    const oldData =req.parsed.myData;
    console.log(id)
    //write code for deleting
    const remainingData = oldData.filter(data => data.id !== Number(id))
    req.stringified ={oldData:remainingData}
    next()
}