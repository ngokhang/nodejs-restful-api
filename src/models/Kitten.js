const mongoose = require('mongoose');

// create Shape of data
const kittenSchema = new mongoose.Schema({
    name: {
        type: String
    },
    color: {
        type: String
    }
});

// create model 
const Kitten = mongoose.model('Kitten', kittenSchema);

module.exports = Kitten;