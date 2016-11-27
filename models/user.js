/**
 * Created by qzhang72 on 11/26/16.
 */
var mongoose = require('mongoose');

// Define our user schema
var UserSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    dateCreated: Date,
    houses: [String],
    number: String,
    college: String
});

// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);