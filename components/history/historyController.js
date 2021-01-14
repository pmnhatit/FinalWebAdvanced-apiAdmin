const historyService = require('./historyService');
const userService = require('../user/userService');

module.exports.getAllHistories = async (req, res, next) =>{
    try {
        const histories = await historyService.getAllHistories();
        let listHistories=[];
        for(let i=0;i<histories.length;i++){
            // const dateformat = new Date(histories[i].date).toLocaleString();
            // console.log("date format"+dateformat);
            listHistories[i]={
                _id: histories[i]._id,
                date: histories[i].date,
            }
            
        }
        res.json({message:"200OK", histories: listHistories});
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
        // const dateformat = new Date(history.date).toLocaleString();
        const infoHistory = {id:history._id, player1: player1.name, 
            player2: player2.name, date: history.date, order: history.order, draw: history.draw};
        res.json({message:"200OK", infoHistory});
    } catch (error) {
        res.status(401).json({message:"errors", error:error});
    }
}

module.exports.getHistoriesUser = async (req, res, next) =>{
    try {
        console.log(req.body.id);
        const histories = await historyService.getAllHistoriesByIdUser(req.body.id);
        // console.log(histories);
        let listHistories=[];
        for(let i=0;i<histories.length;i++){
            // const player1 = await userService.getUserById(histories[i].player1);
            // const player2 = await userService.getUserById(histories[i].player2);
            let status="";
            if(histories[i].draw){
                status="Draw";
            }else{
                if(histories[i].player1==req.body.id)
                {
                    status="Win";
                }else{
                    status="Lose";
                }
            }
            // const dateformat = new Date(histories[i].date).toLocaleString();
            // console.log("date format"+dateformat);
            listHistories[i]={
                id: histories[i]._id,
                date: histories[i].date,
                status: status
            }
            
        }
        res.json({message:"200OK", listHistories});
    } catch (error) {
        res.status(401).json({message:"errors", error:error});
    }
}