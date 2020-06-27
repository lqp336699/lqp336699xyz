var express = require('express');
var saveLesson = express.Router();
var MongoClient = require('mongodb').MongoClient;



MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, function (err, client) {
    if (err) throw err;
    var db = client.db('lqp336699');
    saveLesson.post('/',(req,res)=>{

        let {title,data,lesson } = req.body;

        db.collection(title).insertOne(req.body, function(err, result) {
            if (err) throw err;
            console.log("文档插入成功");
        });
        db.collection(lesson).insertOne({title:title}, function(err, result) {
            if (err) throw err;
            console.log("文档插入成功");
        });
        res.send("666");
    });
});

module.exports = saveLesson;
