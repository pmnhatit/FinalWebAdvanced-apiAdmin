const userService = require('./userService');

module.exports.getAllUser = async (req, res, next) =>{
    try {
        const users = await userService.getAllUser();
        let infoUsers=[];
        for(let i=0;i<users.length;i++){
            infoUsers[i]={
                        id: users[i]._id,
                        name: users[i].name,
                        username: users[i].username,
                        phone: users[i].phone,
                        email: users[i].email,
                        blocked: users[i].blocked,
            }
        }
        // console.log(infoUsers);
        res.json({message:"200OK", users: infoUsers});
        // res.send(infoUsers);
    } catch (error) {
        res.status(401).json({message:"errors",error:error});
    }
}

module.exports.getUserById = async (req, res, next) =>{
    try {
        console.log(req.body.id);
        const user = await userService.getUserById(req.body.id);
        console.log(user);
        res.json({message:"200OK", infoUser: user});
    } catch (error) {
        res.status(401).json({message:"errors",error:error});
    }
}

module.exports.changeBlockById = async (req, res, next) =>{
    try {
        console.log(req.body.id);
        console.log(req.body.blocked);
        await userService.changeBlockById(req.body.id,req.body.blocked);
        const user = await userService.getUserById(req.body.id);
        // console.log(user);
        res.json({message:"200OK", infoUser: user});
    } catch (error) {
        res.status(401).json({message:"errors",error:error});
    }
}