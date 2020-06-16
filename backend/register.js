var express = require('express');
var register = express.Router();
var MongoClient = require('mongodb').MongoClient;



MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, function (err, client) {
    if (err) throw err;
    var db = client.db('lqp336699');
    register.post('/',function(req,res){
        let repeat = false;
        db.collection("user").find({}).toArray ((function(err,result){
            if (err) throw err;
            result.map(item=>{
                if(item.username === req.body.username){
                    repeat = true;
                }
            });
            if(repeat){
                res.json({name:"repeat"})
            }else{
                db.collection("user").insertOne(req.body,function(err,result){
                    if (err) throw err;
                    console.log("文档插入成功");
                });
                res.json({name:"ok"});
            }
        }));
    });
});

module.exports = register;
