const express = require('express')
const cookieparser = require("cookie-parser");
const cors = require('cors')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const LoginModel = require('./db.js')
const Login = require('./db.js');
const app = express()
app.use(express.json())
app.use(cookieparser());
app.use(cors())
mongoose.connect('mongolink',{
    useNewUrlParser: true, useUnifiedTopology: true
})
app.post('/logging', async (req,res) =>{
    const username = req.body.username
    const password = req.body.password
    if( username!=='' && password!=='')
    {
        const Find = await LoginModel.findOne({username:username}).exec()
        console.log(Find);
        if(Find!== null)
        {
            const token = jwt.sign({ username}, 'supersecret');
            res.cookie('token', token);
            console.log(req.cookies);
        }
      }
})
app.listen(3001)
