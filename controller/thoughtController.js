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

// Update a Thought by id
updateThought({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.id }, { $set: body }, { new: true, runValidators: true })
      .then((thought) => {
        if (!thought) {
          return res.status(404).json({ message: 'No thought with this id!' });
        }
        return res.json(thought);
      })
      .catch((err) => res.status(400).json(err));
  },

// Delete a Thought by Id
deleteThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.id })
      .then((thought) => {
        if (!thought) {
          return res.status(404).json({ message: 'No thought with this id!' });
        }
        return res.json(thought);
      })
      .catch((err) => res.status(400).json(err));
  },

// Add a reaction to a thought
addReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $push: { reactions: body } },
      { new: true, runValidators: true }
    )
      .then((thought) => {
        if (!thought) {
          return res.status(404).json({ message: 'No thought with this id!' });
        }
        return res.json(thought);
      })
      .catch((err) => res.status(400).json(err));
  },
  
};