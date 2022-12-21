const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,"You have to type a name!"],
        minlength: [2, "A name should be at least two characters."]
    },
    position: {
        type:String,
    },
    status: {
        type:[]
    },
}, {timestamps: true});

const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;