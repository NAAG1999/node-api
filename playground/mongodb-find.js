const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, client){
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    var db = client.db('TodoApp');

    db.collection('Users').find({name: 'nilesh'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined,  2));
    });

});