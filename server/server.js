var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb//localhost:27017/TodoApp');

// creating model of our database (Model as in, how will it look like)
var Todo = mongoose.model('Todo',{
    text: {
        type: Text
    },
    completed:{
        type: Boolean
    },
    completedAt:{
        type: Number
    }
});

var newTodo = new Todo({
    text: 'Some text here for the database',
    completed: true,
    completedAt: 111
})



