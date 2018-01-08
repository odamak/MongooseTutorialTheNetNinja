
//import express to run a server
import express from 'express';
import mongoose from 'mongoose';

//run express graphql server
import graphqlHTTP from 'express-graphql';

//graphql, cors, seed dependecies
import schema from 'graphql'
import seed from 'seed'
import cors from 'cors';

//import {useMongoose} from '/js/getting-started.js';

//init app context
const app = express();


//add code or script call
console.log("hello")

// seed();
app.get('/', (req, res) => {
    res.send('Hello World..');
    console.log("hello2")
});

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
mongoose.connect('mongodb://localhost/test');

// We have a pending connection to the test database running on localhost
// We need to get notified if we connect successfully or if a connection error occurs
var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));
db.once('open', function(){

// we're connected!
//our callback will be called
//following code in callback

// In mongoose, everything is derived from a Schema
// define kittySchema as a reference to a schema
    var kittySchema = mongoose.Schema({
        name: String
    })


// var silence = new Kitten({ name: 'Silence'});
// console.log(silence.name);

// add speak functionality to our document
    kittySchema.methods.speak = function () {
        var greeting = this.name
            ? "Meow name is " + this.name
            : "I don't have a name";
        console.log(greeting);
     }

// A model is a class with which we construct documents
// In our case, each document will be a kitten with properties and behaviors as declared in our schema
//compile schema into a model
    var Kitten = mongoose.model('Kitten', kittySchema);

    var fluffy = new Kitten({name: 'fluffy'});
    fluffy.speak(); // normally it should print: "Meow name is fluffy"

// save document to database
    // fluffy.save(function (err, fluffy){
    //     if (err) return console.error(err);
    //     fluffy.speak();
    // });

// access kitten documents from db through Kitten model

    Kitten.find(function (err, kittens){
        if (err) return console.error(err);
        console.log("***display kittens from db**");
        console.log(kittens);
        console.log("***end display kittens from db**");
    })


    //Kitten.find({ name: /^fluff/ }, callback);

    

})