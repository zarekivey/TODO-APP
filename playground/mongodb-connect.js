const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb sevrer.')
    }
    console.log('Connected to mongodb server')

    // Creating a new collection
    // db.collection('Todos').insertOne({
    //     test: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert Todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // });

    // db.collection('Users').insertOne({
    //     name: 'Zarek',
    //     age: 20,
    //     location: 'Atlanta'
    // }, (err, results) => {
    //     if (err) {
    //         return console.log('Unable to insert user', err);
    //     }

    //     console.log(results.ops[0]._id.getTimestamp());
    // });

    db.close();
});