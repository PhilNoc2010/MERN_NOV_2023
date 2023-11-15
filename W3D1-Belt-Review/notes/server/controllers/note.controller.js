const Note = require('../models/note.model');


module.exports = {

    findAllNotes: (req, res) => {
        Note.find()
            .then((notes) => {
                res.json(notes);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    findOneSingleNote: (req, res) => {
        Note.findOne({ _id: req.params.id })
            .then(oneSingleNote => {
                res.json(oneSingleNote);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    createNewNote: (req, res) => {
        Note.create(req.body)
            .then(newlyCreatedNote => {
                res.json(newlyCreatedNote);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    updateExistingNote: (req, res) => {
        Note.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedNote => {
                res.json(updatedNote);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    deleteAnExistingNote: (req, res) => {
        Note.deleteOne({ _id: req.params.id })
            .then(result => {
                res.json(result);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    }

};