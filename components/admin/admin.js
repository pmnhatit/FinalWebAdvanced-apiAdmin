const mongoose = require('mongoose');
var db = mongoose.connection;

//create schame
var adminchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    phone: String,
    email: String,
    auth: String
},
    {
        collection: 'account-admin'
    });

const admin = db.useDb("final-web-advanced").model("account-admin", adminchema);

module.exports = admin;