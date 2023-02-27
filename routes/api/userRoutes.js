const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
    deleteUserThoughts,
} = require('../../controller/userController');


//  /api/users
router.route('/').get(getAllUsers).post(createUser);




// /api/users/:id
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// delete user thoughts when user is deleted (bonus)
router.route('/:id/thoughts').delete(deleteUserThoughts);


//  /api/users/:userId/friends/:friendsId
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;