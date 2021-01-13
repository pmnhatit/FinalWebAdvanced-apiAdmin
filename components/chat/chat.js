const mongoose = require('mongoose');
var db = mongoose.connection;

//create schame
var chatchema = new mongoose.Schema({
    match_id:String,
    chat:[{user:String,text:String}],
},
    {
        collection: 'chathistory'
    });

const chat = db.useDb("final-web-advanced").model("chathistory", chatchema);

module.exports = chat;