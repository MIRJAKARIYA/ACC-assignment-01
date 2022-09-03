const reqFields = ["id", "name", "gender","contact","address","photoUrl"]
const validatePostBody = (req, res, next) =>{
    const data = req.body
    console.log(data)
    if(isNaN(data.id) || data.id === ''){
        res.send({status: "failed", message: "id must be a number"});
        return;
    }
    for(const key of reqFields){
        if(data[key] === undefined){
            res.send({status: "failed", message: "You must provide all required fields"})
            return;
        }
    }
    next()
}

module.exports = validatePostBody;