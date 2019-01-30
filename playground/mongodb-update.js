const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb sevrer.')
    }
    console.log('Connected to mongodb server')
    
    // updating
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c5083dbae53065d5e10d0ad')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c5085deae53065d5e10d1a4')
    }, {
        $set: {
            name: 'Zarek'
        },
        $inc: { age: 1 }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })
    
    // db.close();
});