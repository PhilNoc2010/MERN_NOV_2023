// import the mongoose lib to build the schema
const mongoose = require("mongoose");

// the model - the rules the entries need to follow
const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} is required (DB ERROR)"],
        minLength: [3, "{PATH} must have at least 3 chars"]
    },
    image: {
        type: String
    },
    releaseYear: {
        type: Number,
        required: [true, "please provide a date (DB ERROR)"],
        min: [1895, "must be valid"]
    },
    seen: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;