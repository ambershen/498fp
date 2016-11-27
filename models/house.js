/**
 * Created by qzhang72 on 11/26/16.
 */
var mongoose = require('mongoose');

// Define our user schema
var HouseSchema = mongoose.Schema({
    intervals:[{start: Date, end: Date}],
    dateCreated: Date,
    user: String,
    location:{
        lat: Number,
        lng: Number,
        postal_code: String,
        country: String,
        administrative_area_level_1: String,
        administrative_area_level_2: String,
        administrative_area_level_3: String,
        formatted_address: String,
        locality: String,
        neighborhood: String,
        route: String,
        street_number: String,
    },
    is_bed: Boolean,
    is_coach: Boolean,
    description: String,
    image_path: [String],
    rate: Number,
    university: String
});

// Export the Mongoose model
module.exports = mongoose.model('House', HouseSchema);