//创建用户集合
const mongoose = require('mongoose');

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

/*User.create({
    username:'nodeStudent',
    email:'zhangsan@163.com',
    password:'123465',
    role:'admin',
    state:0
}).then(()=>{
    console.log('用户创建成功');
}).catch(()=>{
    console.log('用户创建失败');
})*/

module.exports = {User};