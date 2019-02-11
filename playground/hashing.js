const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

const data = {
    id: 10
};

// sign takes the object and your secret
const token = jwt.sign(data, '123abc');
console.log(token);

// verify takes in the token and the secret
// if the token or secret are wrong then you'll get an error
const decoded = jwt.verify(token, 'abc123');
console.log('decoded', decoded)

// let message = 'I am user number 3';
// let hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);


// // JSON WEB TOKENS - Creating an object, hasinhg it, and verifiying it later
// more info at jwt.io

// let data = {
//     id: 4 
// };

// let token = {
//     data,
//     // creatinga token to represent the users data
//     hash: SHA256(JSON.stringify(data) + 'salting').toString()
// };

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// // testing to see if the resulted hash is the same as the given one
// const resultHash = SHA256(JSON.stringify(token.data) + 'salting').toString();

// if (resultHash === token.hash) {
//     console.log('data was not changed')
// } else {
//     console.log('data was changed')
// }

