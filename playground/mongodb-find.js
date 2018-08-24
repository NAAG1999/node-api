const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, client){
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

db.collection('Users').find({name: 'Nilesh'}).count().then((count) => {
    console.log(`Todos count: $(count)`);
}, (err) =>{
    console.log('Unable to fetch todos', err)
});

});