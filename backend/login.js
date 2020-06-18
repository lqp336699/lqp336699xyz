var express = require('express');
var login = express.Router();
var MongoClient = require('mongodb').MongoClient;

var jwt = require('jsonwebtoken');

let secret = 'LQP';


MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, function (err, client) {
    if (err) throw err;
    var db = client.db('lqp336699');
    login.post('/',async function(req,res){
        let { username,password } = req.body;
        let userInfo = await db.collection("user").findOne({username: username, password: password});
        if(userInfo){
            res.json({
                login:"success",
                userInfo: userInfo
            })
        }else{
            res.json({
                login:"密码不正确",
                userInfo: ''
            })
        }


    });
});

module.exports = login;
