const mongoose = require('mongoose');

// create Shape of data
const userSchema = new mongoose.Schema({
    email: 'string',
    username: 'string',
    city: 'string'
});

// create model 
const User = mongoose.model('users', userSchema);

module.exports = User;