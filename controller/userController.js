const { User, Thought} = require('../models');

module.exports = {
    // Get all users
    getAllUsers(req, res) {
      User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
  
    // Get one user by id
    getUserById({ params }, res) {
      User.findOne({ _id: params.id })
        .then((user) => {
          if (!user) {
            return res.status(404).json({ message: 'No user with this id!' });
          }
          return res.json(user);
        })
        .catch((err) => res.status(400).json(err));
    },
  
    // Create a user
    createUser({ body }, res) {
      User.create(body)
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json(err));
    },
  
    // Update a user by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, { $set: body }, { new: true, runValidators: true })
          .then((user) => {
            if (!user) {
              return res.status(404).json({ message: 'No user with this id!' });
            }
            return res.json(user);
          })
          .catch((err) => res.status(400).json(err));
      },
      
  
    // Delete a user by id
    deleteUser({ params }, res) {
      User.findOneAndDelete({ _id: params.id })
        .then((user) => {
          if (!user) {
            return res.status(404).json({ message: 'No user with this id!' });
          }
          return res.json(user);
        })
        .catch((err) => res.status(400).json(err));
    },

    // Delete user's associated thoughts when user is delete (BONUS)
    deleteUserThoughts({ params }, res) {
      User.findOne({ _id: params.id })
      .then(async(user) => {
        user.thoughts.forEach(async thoughtId => { 
          await Thought.findOneAndDelete({ _id: thoughtId})
        }) 
        user = await User.findOneAndDelete({ _id: params.id})
        if (!user) {
          return res.status(404).json({ message: 'No user with this id!' });
        }
        return res.json(user);
      })
    },
  
    // Add a friend to a user's friend list
    addFriend({ params, body }, res) {
      User.findOneAndUpdate(
        { _id: params.userId },
        { $push: { friends: body.friendId } },
        { new: true }
      )
        .then((user) => {
          if (!user) {
            return res.status(404).json({ message: 'No user with this id!' });
          }
          return res.json(user);
        })
        .catch((err) => res.status(400).json(err));
    },
  
    // Remove a friend from a user's friend list
    deleteFriend({ params }, res) {
      User.findOneAndUpdate(
        { _id: params.userId },
        { $pull: { friends: params.friendId } },
        { new: true }
      )
        .then((user) => {
          if (!user) {
            return res.status(404).json({ message: 'No user with this id!' });
          }
          return res.json(user);
        })
        .catch((err) => res.status(400).json(err));
    },
  };
  