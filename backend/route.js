var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, function (err, client) {
    if (err) throw err;
    var db = client.db('lqp336699');
    // router.get('/api/password/:value', function (req, res) {
    //     db.collection('password').find().toArray(function (err, result) {
    //         if (err) throw err;
    //         result[0].userPassword == req.params.value ? res.json(1) : res.json(0);
    //     });
    // });

    router.get('/study',function(req,res){
        db.collection("study"). find({}).toArray(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
            res.json(result)
        });
    });

    // router.post("/api/addStudy/:value",function(req,res) {
    //         var str='';
    //         var i=0;
    //     req.on('data',function(data){
    //         console.log(`第${++i}次收到数据`);
    //         str+=data;
    //     });//当有一段数据到达的时候
    //         req.on('end',function(){
    //             var POST=str;
    //             var study =  req.params.value;
    //             db.createCollection(study, function (err, res) {
    //                 if (err) throw err;
    //                 console.log("创建集合!");
    //             });
    //             db.collection("study").insertOne({POST}, function(err,dbres) {
    //                 if (err) throw err;
    //                 res.json({ isUpdata:"success" });
    //             });
    //         });//数据全部到达
    // });
});

module.exports = router;

