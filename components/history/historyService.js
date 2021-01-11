const historyModel = require('./history');

module.exports.getAllHistories = async () =>{
    const result = await historyModel.find({});
    return result;
}

module.exports.getAllHistoriesByIdUser = async (id) =>{
    const result = await historyModel.find({$or:[{'player1': id},{'player2': id}]});
    return result;
}

module.exports.getHistoryById = async (id) =>{
    const result = await historyModel.findOne({'_id': id});
    return result;
}