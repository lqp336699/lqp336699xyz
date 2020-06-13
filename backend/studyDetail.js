var express = require('express');
var studyDetail = express.Router();
var MongoClient = require('mongodb').MongoClient;



MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, function (err, client) {

    if (err) throw err;

    var db = client.db('lqp336699');

    studyDetail.post('/:id',function(req,res){
        let id = req.params.id;
        db.collection(id). find({}).toArray(function(err, result) {
            if (err) throw err;
            res.json(result)
        });
    });
});

module.exports = studyDetail;
