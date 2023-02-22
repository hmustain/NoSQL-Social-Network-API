const { User } = require('../models');

module.exports = {
    // Get all users
    getAllUser(req, res) {
      User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
  };