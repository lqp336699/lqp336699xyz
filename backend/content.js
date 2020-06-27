var express = require('express');
var content = express.Router();
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, function (err, client) {
    if (err) throw err;
    var db = client.db('lqp336699');

    content.get('/:id/:title/content',async function(req,res){
        db.collection(req.params.title). find({}).toArray(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
            res.send(result)
        });
    });
});

module.exports = content;
