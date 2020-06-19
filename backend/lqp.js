const express = require('express');
const home  = require('./home');
const studyDetail  = require('./studyDetail');
const login  = require('./login');
const register  = require('./register');
const bodyParser = require('body-parser');
const userLogin = require('./userLogin');
var jwt = require('jsonwebtoken');
const app = express();
const port = 5000;

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use(function (req, res, next) {
    if (req.url ===  '/user/login' && req.method !== 'OPTIONS' ) {
        let token = req.headers.authorization;
        if (!token) {
            res.send({status: 403, msg: '登录已过期,请重新登录'});
        } else {
            next();
        }
    } else {
        next();
    }
});

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use('/api/home',home);
app.use('/api/login',login);
app.use('/api/study',studyDetail);
app.use('/api/register',register);
app.use('/user/login',userLogin);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));


