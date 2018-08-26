var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb//localhost:27017/TodoApp');

// creating model of our database (Model as in, how will it look like)
var Todo = mongoose.model('Todo',{
    text: {
        type: String
    },
    completed:{
        type: Boolean
    },
    completedAt:{
        type: Number
    }
});

var newTodo = new Todo({ //constructor is made here
    text: 'Some text here for the database',
    completed: true,
    completedAt: 111
});

newTodo.save().then((doc) =>{ // .then is a promise and is executed when the newTodo function is called or its work is done 
    console.log(JSON.stringify(doc, undefined ,2));
}, (e) => {
    console.log('Error', e);
});

