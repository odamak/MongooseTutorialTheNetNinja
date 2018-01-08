//import express to run a server
import express from 'express';
import mongoose from 'mongoose';

//run express graphql server
import graphqlHTTP from 'express-graphql';

//graphql, cors, seed dependecies
import schema from 'graphql'
import seed from 'seed'
import cors from 'cors';

import User from './models/user.js';
import Kitten from './models/kitty.js';

import products from './routes/products';

import routes from './routes/api.js';

import bodyParser from 'body-parser';

const app = express();

//middleware coming before the first one
//used to add static pages
app.use(express.static('public'));

//first middleware
//parse json data
app.use(bodyParser.json());

//second middleware
//initialize routes
//by indicating to use routes imported from ./routes/api.js
app.use('/api',routes);

//add code or script call
console.log("hello from index.js")

//third middleware
//call in case of error
//referenced by next in file api.js

app.use((err,req,res,next)=> {
    //console.log(err);
    //console.log("***error has been handled***");
    res.status(422).send({error: err.message})
});

// seed();
// app.get('/', (req, res) => {
//     res.send('Hello World..');
//     console.log("this is a GET request")
// });

// app.get('/api', (req, res) => {
//     console.log("GET request starting");
//     res.send({ name: 'Yoshi'});
// });



// GraphQL API
app.use('*', cors());
/*app.use('/graphql', graphqlHTTP(() => ({
    schema,
    graphiql: true,
    pretty: true
})))*/

app.listen(4000, () => {
    console.log('GraphQL server running at port 4000...')
})

//****************************
//adding mongoose part by Omar from mongoosejs.com/docs
//****************************

// open a connection to the test database on our locally running instance of MongoDB
// mongoose.connect('mongodb://localhost/myappdatabase');
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

// We have a pending connection to the test database running on localhost
// We need to get notified if we connect successfully or if a connection error occurs
var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));

// var omar = new User({
//     name: 'Omarrrrr',
//     username: 'stephaneeeeeeeeeeee',
//     password: 'p@ssworddd'
// });

// omar.dudify(function(err, name){
//     if (err) console.error("***error function dudify***");
// })

//console.log('omar', omar);

// omar.save((err, res) => {
//     if (err) {
//         console.error("***Error Saving***")
//         //throw err;
//     }
//     else console.log(' saved successfully ',res);
// })


// var fluffy = new Kitten({ name: 'fluffy' });
// fluffy.speak();

// var user1 = new User({ name: 'User1'});
// user1.testSpeakMethod();
// user1.dudify(function(err, name){
//     if (err) throw err;
//     console.log('Your name is '+ name);
// });

// user1.save(function(err){
//     if (err) throw err;
//     console.log('User saved successfully!');
// })

// var index = [1,2,3,4,5];
// for (let i of index){
//     var name = 'Peter Quill' + i;
//     var username = 'starlord55' + i;
//     var password= 'password'+ i;
//     var newUser = User({
//         name,
//         username,
//         password,
//         admin: true
//     })
//     newUser.save(function(err) {
//         if (err) {
//             console.log('***Error while saving newUser***');
//             //throw err;
//           }
      
//         else console.log('User created!');
//     });
// }

// save the user


// User.find({}, function(err, users){
//     if (err) throw err;

//     // object of all the users
//     console.log("***display all users***");
//     console.log(users);
// })

// User.find({ username: 'odamak'}, function(err, user){
//     if (err) throw err;
//     console.log("***display user with specific username***");
//     console.log(user);
// })

// User.findById('5a4127ec4807eb0184b76ee1', function(err, user){
//     if (err) throw err;
//     console.log('***dispaly user with chosen Id***');
//     console.log(user);
// })

//Querying

// const monthAgo = new Date();
// monthAgo.setMonth(monthAgo.getMonth() - 1);
// console.log('***past month***', monthAgo);

// User.find({ admin: true}).where('created_at').gt(monthAgo).exec(function(err, users){
//     if (err) throw err;
//     console.log("***admins in the past month***", users);
// })

//update a user

// get a user with ID of 1
// User.findById('5a4127ec4807eb0184b76ee1', function(err, user) {
//     if (err) throw err;  
//     // change the users location
//     user.location = 'uk';
  
//     // save the user
//     user.save(function(err) {
//       if (err) throw err;
  
//       console.log('***User successfully updated!***');
//     });
  
//   });


// find the user odamak
// update him to odamak007
// User.findOneAndUpdate({ username: 'odamakaaaaa' }, { username: 'odamak' }, function(err, user) {
//     if (err) throw err;
  
//     // we have the updated user returned to us
//     console.log('***find and update success***',user);
//   });


// Get a user then remove (for some reason it doesn't work)
// User.remove({ username: 'starlord553'}, function(err) {
//     if (err) throw err;
//     console.log('raw rfase5');

// })


// Find and remove a user
// User.findOneAndRemove({ username: 'odamak' }, function(err) {
//     if (err) throw err;
  
//     // we have deleted the user
//     console.log('User deleted!');
//   });

// User.findByIdAndRemove('5a42613caffb0b2b8816e44c', function(err) {
//     if (err) throw err;
//     console.log('User deleted!');
// });


