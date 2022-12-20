const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,"You have to type a name!"],
        minlength: [3, "A name should be at least three characters."]
    },
}, {timestamps: true});

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;