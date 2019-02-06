const {ObjectID} = require('mongoose')

const {mongoose} = require('./../server/db/mongoose')
const {Todo}  = require('./../server/models/todo')
const {User}  = require('./../server/models/user')


// removing all documents
// Todo.remove({}).then((result) => {
//     console.log(result);
// })


// fetches the one and then removes
Todo.findOneAndRemove({ _id: '5c5ae197ae53065d5e10ee71'}).then((todo) => {

});

Todo.findByIdAndRemove('5c5ae197ae53065d5e10ee71').then((todo) => {
    console.log(todo);
})

