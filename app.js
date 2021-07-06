const express = require('express');
const path = require('path');
const app = express();
require('./model/connect');
//require('./model/user');
app.set('views',path.join(__dirname,'views'));

app.set('view engine','art');

app.engine('art',require('express-art-template'));

//开发静态资源
app.use(express.static(path.join(__dirname,'public')));

//路由
const home = require('./route/home');
const admin = require('./route/admin');

app.use('/home',home);
app.use('/admin',admin);

app.listen(80);
console.log("服务器启动成功");