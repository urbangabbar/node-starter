const mongoose = require('mongoose');

const usercollection = 'user';

const User = mongoose.model(usercollection, {
    name: String,
    mobile: Number,
    address: String
});


// To consume a object or any other resource 
// you will need to export it like below and then import it over there.
module.exports = User;