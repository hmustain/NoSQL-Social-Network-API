const { Thought } = require('../models');

module.exports = {
    // GET all thoughts
    getAllThoughts(req, res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },

// Get thought by id
getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
    .then((thought) => {
        if (!thought) {
            return res.status(404).json({ message: 'No thought with this id!'})
        }
        return res.json(thought);
    })
    .catch((err) => res.status(400).json(err));
},

// Create Thought
createThought({ body }, res) {
    Thought.create(body)
        .then((thought) => res.json(thought))
        .catch((err) => res.status(400).json(err));
},
};