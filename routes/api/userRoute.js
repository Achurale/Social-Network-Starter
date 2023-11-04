const router = require('express').Router();
const { getUsers, createUser, getUser, updateUser, deleteUser, addFriend, deleteFriend } = require('../../controllers/userController')

// Get all | /api/users/
router.route('/').get(getUsers).post(createUser)

// Get one | /api/users/:id
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser)

// /api/users/:id/:friendId
router.route('/:id/:friendId').put(addFriend).delete(deleteFriend)

module.exports = router;