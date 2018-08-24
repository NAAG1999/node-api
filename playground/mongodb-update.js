//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, client){
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    var db = client.db('TodoApp'); //name of the database

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b7f67ecee85ff28ae80714a')
    },{
        $set: {
            name: "Nilesh"
        }, 
        $inc:{
            age: 1
        }
    },
    {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
});