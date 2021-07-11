//创建用户集合
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username:{
        type : String,
        required : true,
        minlength : 2,
        maxlength : 20
    },
    email:{
        type : String,
        unique : true,
        required : true
    },
    password:{
        type : String,
        required : true
    },
    //admin or normal
    role:{
        type : String,
        required : true
    },
    state:{
        type : Number,
        default : 0
    }
});

const User = mongoose.model('User',userSchema);

async function createUser(){
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash('123456',salt);
    const user = await User.create({
        username:'nodeVIPStudent',
        email:'lisi@163.com',
        password:pass,
        role:'admin',
        state:0
    })
}

//createUser();

module.exports = {User};