import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var testUserSchema = mongoose.Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: Boolean,
    location: String,
    meta: {
        age: Number,
        website: String
    },
    created_at: Date,
    updated_at: Date
});

testUserSchema.methods.testSpeakMethod = function () {
    var greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
    return(greeting);
  }

testUserSchema.methods.dudify = function() {
// add some stuff to the users name
    this.name = this.name + '-dude'; 
    console.log(this.name);
    return this.name;
};

var testUser = mongoose.model('testUser', testUserSchema);

module.exports = testUser;
