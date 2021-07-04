const express = require('express');
const path = require('path');
const app = express();

//开发静态资源
app.use(express.static(path.join(__dirname,'public')));

//路由
const home = require('./route/home');
const admin = require('./route/admin');

app.use('/home',home);
app.use('/admin',admin);

app.listen(80);
console.log("服务器启动成功");