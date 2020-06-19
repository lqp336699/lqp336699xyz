var express = require('express');
var userLogin = express.Router();
var MongoClient = require('mongodb').MongoClient;
var jwt = require('jsonwebtoken');

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, function (err, client) {
    if (err) throw err;
    var db = client.db('lqp336699');

    userLogin.get('/', function(req,res){
        let token  = req.headers.authorization;
         jwt.verify(token, 'shhhhh',async function(err, decoded) {
            let userInfo =await  db.collection("user").findOne({username: decoded});
            if(userInfo){
                res.json({
                    login:"success",
                    userInfo: userInfo,
                })
            }else{
                res.json({
                    login:"error",
                    userInfo: {},
                })
            }
        });
    });
});

module.exports = userLogin;
