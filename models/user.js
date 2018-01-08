import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var UserSchema = mongoose.Schema({
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

UserSchema.methods.testSpeakMethod = function () {
    var greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
    return(greeting);
  }

UserSchema.methods.dudify = function() {
// add some stuff to the users name
    this.name = this.name + '-dude'; 
    //console.log(this.name);
    return this.name;
};

// UserSchema.pre('save', function(next) {
//     // get the current date
//     var currentDate = new Date();
  
//     // change the updated_at field to current date
//     this.updated_at = currentDate;
  
//     // if created_at doesn't exist, add to that field
//     if (!this.created_at)
//       this.created_at = currentDate;
//     //we can also add operation to hash password
//     next();
//   });


var User = mongoose.model('User', UserSchema);

module.exports = User;
