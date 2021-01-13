const moveModel = require('./move');

module.exports.getMoveHistoryByID = async (match_id)=>{
    const result = await moveModel.findOne({ match_id});
    return result;
}