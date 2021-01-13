const chatModel = require('./chat');

module.exports.getChatHistoryById = async (id)=>{
    const result = await chatModel.findOne({match_id: id});
    return result;
}