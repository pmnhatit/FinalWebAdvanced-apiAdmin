const userModel = require('./user');
const bcrypt = require('bcryptjs');

module.exports.getUserByUsername = async (username)=>{
    const result = await userModel.findOne({username: username});
    return result;
}

module.exports.getUserByID= async (id) =>{
    const result = await userModel.findOne({_id: id});
    return result;
}

module.exports.updateUser = async (id, name, phone) => {
    const result = await userModel.updateOne({ '_id': id }, { $set: { 'name': name, 'phone': phone }}, (err, doc) => {
        if (err) {
            console.log("update document error");
        } else {
            console.log("update document success");
            console.log(doc);
        }
    });
    console.log("hết service");
}

module.exports.createAdmin = async (username, password, name, phone, email, auth) =>{
    let hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    const newUser = new userModel({ username, password: hash, name, phone, email, auth});
    return newUser.save();
}