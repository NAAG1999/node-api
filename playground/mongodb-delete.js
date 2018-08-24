const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, client){
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    var db = client.db('TodoApp'); //name of the database

    db
    .collection('Todos')
    .deleteMany({text: 'Your text here from the database'})
    .then((result) =>{
        console.log(result);
    });
    // there are other 2 methods too... 
    // Best is to use findOneAndDelete method, as it returns the deleted value too
});