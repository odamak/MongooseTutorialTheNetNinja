import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var kittySchema = mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function () {
    var greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  }

var Kitten = mongoose.model('Kitten', kittySchema);

module.exports = Kitten;