const express = require('express');
const home  = require('./home');
const studyDetail  = require('./studyDetail');
const login  = require('./login');
const register  = require('./register');
const bodyParser = require('body-parser');
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

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use('/api/home',home);
app.use('/api/login',login);
app.use('/api/study',studyDetail);
app.use('/api/register',register);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));


