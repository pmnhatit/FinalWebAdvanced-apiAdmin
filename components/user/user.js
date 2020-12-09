const mongoose = require('mongoose');
var db = mongoose.connection;

//create schame
var userchema = new mongoose.Schema({
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

const user = db.useDb("final-web-advanced").model("account-admin", userchema);

module.exports = user;