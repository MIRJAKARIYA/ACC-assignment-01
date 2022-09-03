const validateId = (req, res, next) =>{
    const id = req.params.id
    if(isNaN(id) || id === ''){
        res.send({status: "failed", message:"id must be a number"})
        return;
    }
    next();
}

module.exports = validateId;