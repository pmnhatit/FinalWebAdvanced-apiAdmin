const userModel = require('./user');

module.exports.getAllUser = async () =>{
    const result = await userModel.find({});
    return result;
}

module.exports.getUserById = async (id) =>{
    const result = await userModel.findOne({_id: id});
    return result;
}