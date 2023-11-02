const mongoose = require('mongoose');

const UserPosts = mongoose.Schema({
    username:{
        type: String,
        require: true
    },
    name:{
        type: String, 
        require: true
    },
    description:{
        type: String,
        require: true
    },
    message:{
        type: String,
        require: true
    },
    photoUrl:{
        type: String,
        require: true
    },
    time:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('post', UserPosts);