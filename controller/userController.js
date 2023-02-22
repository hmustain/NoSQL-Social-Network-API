const { User } = require('../models');

// create userController
const userController = {
    // GET all users
    getAllUsers(req, res) {
        User.find({})
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .populate({
            path: 'friends',
            select: '-__v'
        })
        .select('-__v')
        .sort({ _id: -1 })
        .then(users => res.json(users))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    }
};