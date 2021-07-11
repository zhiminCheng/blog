const express = require('express');
const bcrypt = require('bcrypt');
const admin = express.Router();
const {User} = require('../model/user');

admin.get('/',(req,res) => {
    res.send('欢迎来到博客管理页');
});

admin.get('/login',(req,res) => {
    res.render('admin/login');
});


admin.post('/login',async (req,res) => {
    const {email,password} = req.body;
    let user = await User.findOne({email});
    if(email.trim().length == 0 || password.trim().length == 0){
        return res.status('400').render('admin/error',{msg:'邮件地址或者密码错误'});
    }
    if(user){
        let isValid = await bcrypt.compare(password,user.password);
        if(isValid){
            req.username = user.username;
            res.send('登录成功');
        }else{
            return res.status('400').render('admin/error',{msg:'邮件地址或者密码错误'});
        }
    }else{
        return res.status('400').render('admin/error',{msg:'邮件地址或者密码错误'});
    }
});

admin.get('/user',(req,res) => {
   res.render('admin/user',{
       msg:req.username
   })
});

module.exports = admin;