var express = require('express');
var home = express.Router();
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, function (err, client) {
    if (err) throw err;
    var db = client.db('lqp336699');

    home.get('/study',function(req,res){
        db.collection("study"). find({}).toArray(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
           return  res.json(result);
        });
    });

    home.get('/userInfo/:value', function (req, res) {
        db.collection('user').find({}).toArray(function (err, result) {
            if (err) throw err;
            let data = {};
            result.map(item=>{
                if(item.username === req.params.value){
                    data = item;
                }
            });
            return  res.json(data);
        });
    });

});

module.exports = home;

