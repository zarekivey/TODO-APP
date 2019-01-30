const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb')

const { mongoose } = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    let id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    // invalid id
    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.staus(404).send();
        }
    // success
        res.send({todo});
    // if it fails
    }).catch((e) => {
        res.status(404).send();
    });
});

app.listen(3000, () => {
    console.log('server live on port 3000')
});

module.exports = {app};