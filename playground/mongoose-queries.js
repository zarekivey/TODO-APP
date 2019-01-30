const {ObjectID} = require('mongoose')

const {mongoose} = require('./../server/db/mongoose')
const {Todo}  = require('./../server/models/todo')

// let id = '5c51b908e1980e90168dc3bc'

// if (!ObjectID.isValid(id)) {
//     console.log('ID not found');
// }

// // finds all
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// // find the first one that matches
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// // find by id
// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found')
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));