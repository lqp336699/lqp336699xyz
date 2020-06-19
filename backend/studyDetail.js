var express = require('express');
var studyDetail = express.Router();
var MongoClient = require('mongodb').MongoClient;



MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, function (err, client) {

    if (err) throw err;

    var db = client.db('lqp336699');

    studyDetail.post('/pinLun',function(req,res){
        let id =  req.body.id;
        db.collection(`${id}PinLun`). insertOne(req.body,(function(err, result) {
            if (err) throw err;
            console.log("文档插入成功");
            return res.json({success:"OK"});
        }));
    });

    studyDetail.post('/lesson/:id',function(req,res){
        let id = req.body.id;
        db.collection(id). find({}).toArray(function(err, result) {
            if (err) throw err;
            res.json(result);
        });
    });

    studyDetail.post('/getPinLun',function(req,res){
        let id = req.body.id;
        db.collection(`${id}PinLun`). find({}).toArray(function(err, result) {
            if (err) throw err;
            res.json(result);
            return false;
        });
    });



});

module.exports = studyDetail;
