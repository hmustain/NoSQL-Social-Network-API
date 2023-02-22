const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controller/userController');


//  /api/users
router.route('/').get(getAllUser).post(createUser);


// /api/users/:id
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);


//  /api/users/:userId/friends/:friendsId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;