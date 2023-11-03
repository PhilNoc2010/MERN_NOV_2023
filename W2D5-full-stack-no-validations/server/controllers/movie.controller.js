// the controller does the CRUD for the DB
// import the model here
const Movie = require("../models/movie.model");

// READ ALL
module.exports.findAllMovies = (req, res) => {
    Movie.find() //[]
        .then((allDaMovies) => {
            console.log(">>> Movie.find() >>>", allDaMovies);
            // ! this is what react will receive in its res.data
            res.json(allDaMovies);
        })
        .catch((err) => {
            res.json(err);
        });
};

// READ ONE
module.exports.findOneSingleMovie = (req, res) => {
    Movie.findOne({ _id: req.params.id })
        .then(oneSingleMovie => {
            res.json(oneSingleMovie);
        })
        .catch((err) => {
            res.json(err);
        });
};

// CREATE
module.exports.createNewMovie = (req, res) => {
    Movie.create(req.body)
        .then(newlyCreatedMovie => {
            res.json(newlyCreatedMovie);
        })
        .catch((err) => {
            res.json(err);
        });
};

// UPDATE
module.exports.updateExistingMovie = (req, res) => {
    Movie.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedMovie => {
            res.json(updatedMovie);
        })
        .catch((err) => {
            res.json(err);
        });
};

// DELETE
module.exports.deleteAnExistingMovie = (req, res) => {
    Movie.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json(result);
        })
        .catch((err) => {
            res.json(err);
        });
};