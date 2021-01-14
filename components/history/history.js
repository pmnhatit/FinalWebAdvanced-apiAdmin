const mongoose = require('mongoose');
var db = mongoose.connection;

//create schame
var historychema = new mongoose.Schema({
    player1: String,
    player2: String,
    date: String,
    order: Number,
    draw: Boolean
},
    {
        collection: 'history'
    });

const history = db.useDb("final-web-advanced").model("history", historychema);

module.exports = history;