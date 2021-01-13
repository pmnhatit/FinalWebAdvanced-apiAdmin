const chatServices = require('./chatServices');

module.exports.getMatchChatHistoryById = async (req, res, next)=>{
    try {
        console.log("id match: ",req.body.id);
        // const id="5ffbd5444c8bf74c543b21c2";
        const matchChat = await chatServices.getChatHistoryById(req.body.id);
        console.log("match chat history: ",matchChat);
        if(matchChat.chat.length==0)
        {
            console.log("Vo if")
            const chat =  [{user:"admin", text:"No history chat!"}];
            res.json({message:"200OK", historyChat:{chat}});
        }else{
            console.log("Vo else")
            res.json({message:"200OK", historyChat: matchChat});
        }
    } catch (error) {
        console.log("errors: ", error );
        res.status(400).json({message: "error"});
    }
}