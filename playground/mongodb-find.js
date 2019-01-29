const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb sevrer.')
    }
    console.log('Connected to mongodb server')

    // querying data via arrays
    // db.collection('Todos').find({
    //     _id: new ObjectID('5c506c07838f064260875b72')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos.')
    // })
    
    // countuing the amount of items in the todo collection
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch Todos.')
    // })
    // db.close();
    db.collection('Users').find({name: 'Zarek'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    })
    
});