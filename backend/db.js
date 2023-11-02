const mongoose = require('mongoose');
const uri = 'mongodb://127.0.0.1:27017/linkedinDbs';

const connectDB = ()=>{
    mongoose.connect(uri).then(()=>{
        console.log("Database connected successfully");
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports =  connectDB;