const historyService = require('./historyService');
const userService = require('../user/userService');

module.exports.getAllHistories = async (req, res, next) =>{
    try {
        const histories = await historyService.getAllHistories();
        let listHistories=[];
        for(let i=0;i<histories.length;i++){
            // const player1 = await userService.getUserById(histories[i].player1);
            // const player2 = await userService.getUserById(histories[i].player2);
            const dateformat = new Date(histories[i].date).toLocaleString();
            console.log("date format"+dateformat);
            listHistories[i]={
                _id: histories[i]._id,
                date: dateformat,
            }
            
        }
        // const histories1 = await historyService.getAllHistoriesById("5fcf97b54c77053d00c8ddac");
        // console.log(histories1);
        res.json({message:"200OK", histories: listHistories});
        // res.send(infoUsers);
    } catch (error) {
        res.status(401).json({message:"errors",error:error});
    }
}

module.exports.getHistoryById = async (req, res, next) =>{
    try {
        console.log(req.body.id);
        // const id = "5fd9dedffea29a4868ed1955";
        const history = await historyService.getHistoryById(req.body.id);
        const player1 = await userService.getUserById(history.player1);
        const player2 = await userService.getUserById(history.player2);
        console.log("history: "+history);
        const dateformat = new Date(history.date).toLocaleString();
        const infoHistory = {id:history._id, player1: player1.name, 
            player2: player2.name, date: dateformat, order: history.order};
        res.json({message:"200OK", infoHistory});
    } catch (error) {
        res.status(401).json({message:"errors", error:error});
    }
}

module.exports.getHistoriesUser = async (req, res, next) =>{
    try {
        console.log(req.body.id);
        const histories = await historyService.getAllHistoriesByIdUser(req.body.id);
        console.log(histories);
        let listHistories=[];
        for(let i=0;i<histories.length;i++){
            const player1 = await userService.getUserById(histories[i].player1);
            const player2 = await userService.getUserById(histories[i].player2);
            const dateformat = new Date(histories[i].date).toLocaleString();
            // console.log("date format"+dateformat);
            listHistories[i]={
                id: histories[i]._id,
                date: dateformat,
                winner: player1.name,
                loser: player2.name
            }
            
        }
        res.json({message:"200OK", listHistories});
    } catch (error) {
        res.status(401).json({message:"errors", error:error});
    }
}