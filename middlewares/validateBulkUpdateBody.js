const validateBulkUpdateBody = (req, res, next) =>{
    const data = req.body;
    if(Array.isArray(data) === false){
        res.send({status:"failed",message:"body must be an array of user ids"})
        return;
    }
    next();
}

module.exports = validateBulkUpdateBody;