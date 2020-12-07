const userService = require('./userService');
const jwt = require('jsonwebtoken');
const passportJWT = require("passport-jwt");


module.exports.signIn = async(req, res, next) =>{
    const user = req.user;
    console.log(user);
    if(user.message==="null"){
        res.status(401).json({message:"username or password invalid"});
    }else{
        console.log("vô else")
        // Generate jwt token for user, you can also add more data to sign, such as: role, birthday...
        const sign = {username: user.username, id: user.id}
        // const token = jwt.sign(user.username, process.env.KEY_SECRET);
        const token = jwt.sign(sign, process.env.KEY_SECRET);
        console.log("token controller:"+token);
        res.json({message: "200OK", token: token, infoUser: user});
    }
}
module.exports.updateInfo = async (req, res, next) =>{
    try {
        console.log("Vo controler");
        console.log(req.body.id);
        await userService.updateUser(req.body.id,req.body.name,req.body.phone);
        const user = await userService.getUserByID(req.body.id);
        console.log(user);
        const infoUser = {id: user._id, name: user.name, phone: user.phone, username: user.username}
        res.json({message:"200OK", infoUser: infoUser});
    } catch (error) {
        res.status(401).json({message:"errors",error:error});
    }
}
module.exports.createAdmin = async (req, res, next) =>{
    try {
        const admin = await userService.getUserByUsername(req.body.username);
        if(admin){
            res.status(401).json({message:"user_exists"});
        }else{
            const newAdmin = await userService.createAdmin(req.body.username, req.body.phone, req.body.name, req.body.phone, req.body.email, "2");
            console.log(newAdmin);
            res.json({message: "200OK"});
        }
        
    } catch (error) {
        res.status(401).json({message:"errors",error:error});
    }
}