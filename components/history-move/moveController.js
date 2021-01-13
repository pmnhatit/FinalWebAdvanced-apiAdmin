const moveServices = require('./moveServices');

module.exports.getMoveByIdMatch = async (req, res, next) =>{
    try {
        // const id="5ffbd9d29417b43b6846e517";
        console.log("id: ",req.body.id);
        const historyMove = await moveServices.getMoveHistoryByID(req.body.id);
        console.log("history move: ", historyMove);
        res.json({message: "200OK", historyMove});
    } catch (error) {
        console.log("error: "+error);
        res.status(400).json({message: "error"});
    }
}