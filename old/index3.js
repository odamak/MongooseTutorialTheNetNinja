
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
    var Schema = mongoose.Schema;
    
    //Schema maps to a MongoDB collection
    //and define the shape of the documents within that collection
    var blogSchema = new Schema({
        title: String,  //each key in blogSchema defines a property in document
        author: String, //which will be cast to it associated SchemaType
        body: String,
        comments: [{ body: String, date: Date }],
        date: { type: Date, default: Date.now },
        hidden: Boolean,
        meta: {
            votes: Number,
            favs: Number
        }
    });

    //to use our schema definition, we need to convert blogSchema into a Model
    var Blog = mongoose.model('Blog', blogSchema);

    //instances of Models are documents





})