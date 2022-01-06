const { model, Schema } = require("mongoose");

// I could have done: 
// const mongoose = require('mongoose');
///const Schema = mongoose.Schema;


const movieSchema = new Schema({
    title: {
        type: String
    },
    director: {
        type: String
    },
    stars: {
        type: Array,
    },
    description: String,
    showtimes: Array
});

const Movie = model("Movies", movieSchema);

// i could have done const Movie = mangoose.model("Movies", movieSchema)

module.exports = Movie;
