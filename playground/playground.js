const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, client){
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    var db = client.db('testingFirst');

    db.collection('Users').insertOne({
        Name: 'Nilesh',
        Age: 'Age',
        Sex:'Male'
    }, function(err,result){
        if(err){
            console.log('Unable to connect to the mongoDB');
        }
            console.log(result.ops);   
    
        client.close();
    });
});