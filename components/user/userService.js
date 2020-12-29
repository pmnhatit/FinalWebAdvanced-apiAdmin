const userModel = require('./user');

module.exports.getAllUser = async () =>{
    const result = await userModel.find({});
    return result;
}

module.exports.getUserById = async (id) =>{
    const result = await userModel.findOne({_id: id});
    return result;
}

module.exports.changeBlockById = async (id, blocked) =>{
    const result = await userModel.updateOne({ '_id': id }, { $set: { 'blocked': blocked }}, (err, doc) => {
        if (err) {
            console.log("update document error");
        } else {
            console.log("update document success");
            console.log(doc);
        }
    });
    console.log("hết service");
}