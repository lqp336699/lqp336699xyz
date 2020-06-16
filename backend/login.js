var express = require('express');
var login = express.Router();
var MongoClient = require('mongodb').MongoClient;



MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, function (err, client) {
    if (err) throw err;
    var db = client.db('lqp336699');
    login.post('/',function(req,res){
        db.collection("user").find({}).toArray ((function(err,result){
            if (err) throw err;
            let flag = false;
            let userInfo = {};
            result.map(item=>{
                   if(item.password === req.body.password){
                       flag = true;
                       userInfo = Object.assign({},item)
                   }
            });
            if(flag){
                res.json({login:"success",userInfo})
            }else{
                res.json({login:"password is error"})
            }
        }));
    });
});

module.exports = login;
