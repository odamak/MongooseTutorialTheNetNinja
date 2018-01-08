//template file used by default in all graphQL Mongoose projects

//import express to run a server
import express from 'express';
import mongoose from 'mongoose';

//run express graphql server
import graphqlHTTP from 'express-graphql';

//graphql, cors, seed dependecies
import schema from 'graphql'
import seed from 'seed'
import cors from 'cors';

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