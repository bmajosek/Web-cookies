const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
    user:{
        type: String
    },
    pass:{
        type: String
    }
})

const Login = mongoose.model('Login',LoginSchema)
module.exports = Login 
