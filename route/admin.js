const express = require('express');
const admin = express.Router();
admin.get('/',(req,res) => {
    res.send('欢迎来到博客管理页');
});

admin.get('/login',(req,res) => {
    res.render('admin/login');
});

module.exports = admin;